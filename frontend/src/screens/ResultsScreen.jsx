import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchMedicine } from '../api/api'
import { MOCK_PHARMACIES } from '../lib/mock'
import PharmacyCard from '../components/PharmacyCard'
import MapView from '../components/MapView'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Card from '../components/Card'
import { useAppStore } from '../lib/store'

export default function ResultsScreen(){
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const medicine = params.get('medicine') || ''
  const { viewMode, setViewMode } = useAppStore()

  const [data, setData] = useState([])
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let cancelled = false
    (async ()=>{
      setLoading(true)
      const api = await searchMedicine(medicine)
      const items = api.length ? api : MOCK_PHARMACIES
      if(!cancelled){ setData(items); setLoading(false) }
    })()
    return ()=>{ cancelled = true }
  }, [medicine])

  const filtered = useMemo(()=>{
    let arr = [...data]
    if(active==='lowest') arr.sort((a,b)=>a.price-b.price)
    if(active==='nearest') arr.sort((a,b)=>a.distance-b.distance)
    if(active==='stock') arr = arr.filter(x=>x.availability)
    return arr
  }, [data, active])

  return (
    <div className="container section">
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16, gap:12, flexWrap:'wrap'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <h2 className="h2" style={{margin:0}}>{medicine}</h2>
          <Badge color="blue">{data.length} results</Badge>
        </div>
        <div style={{display:'flex', gap:8}}>
          <button className={`tab ${active==='all'?'active':''}`} onClick={()=>setActive('all')}>All</button>
          <button className={`tab ${active==='lowest'?'active':''}`} onClick={()=>setActive('lowest')}>Lowest Price</button>
          <button className={`tab ${active==='nearest'?'active':''}`} onClick={()=>setActive('nearest')}>Nearest</button>
          <button className={`tab ${active==='stock'?'active':''}`} onClick={()=>setActive('stock')}>In Stock</button>
        </div>
        <div>
          <Button variant={viewMode==='list'?'primary':'outline'} onClick={()=>setViewMode('list')}>List</Button>
          <Button variant={viewMode==='map'?'primary':'outline'} onClick={()=>setViewMode('map')} style={{marginLeft:8}}>Map</Button>
        </div>
      </div>

      {loading ? (
        <Card>Loading...</Card>
      ) : viewMode==='list' ? (
        <div className="grid grid-3">
          {filtered.map(ph=><PharmacyCard key={ph.id} data={ph} />)}
        </div>
      ) : (
        <MapView items={filtered} selectedId={selected?.id} onSelect={setSelected} />
      )}
    </div>
  )
}
