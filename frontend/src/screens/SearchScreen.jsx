import { useState } from 'react'
import { POPULAR } from '../lib/mock'
import Button from '../components/Button'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

export default function SearchScreen(){
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const go = () => { if(q.trim()) navigate(`/results?medicine=${encodeURIComponent(q)}`) }

  return (
    <div className="container section">
      <h1 className="h1" style={{marginBottom:12}}>What medicine are you looking for?</h1>
      <div style={{display:'flex', gap:8}}>
        <Input placeholder="Type a medicine name..." value={q} onChange={e=>setQ(e.target.value)} />
        <Button onClick={go}>Search</Button>
      </div>

      <div style={{marginTop:16}} className="small">Popular</div>
      <div style={{display:'flex', gap:8, marginTop:8, flexWrap:'wrap'}}>
        {POPULAR.map(p=><button key={p} className="btn btn-outline" onClick={()=>{setQ(p);}}>{p}</button>)}
      </div>

      <div className="grid grid-3" style={{marginTop:24}}>
        <div className="card">💲 Best Prices</div>
        <div className="card">📍 Nearby</div>
        <div className="card">✅ In Stock</div>
      </div>
    </div>
  )
}
