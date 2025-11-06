import { Heart, Phone, MapPin, Star } from 'lucide-react'
import Button from './Button'
import Badge from './Badge'
import Card from './Card'
import { Link } from 'react-router-dom'
import { formatINR, minutesFromKm } from '../lib/utils'
import { useAppStore } from '../lib/store'

export default function PharmacyCard({ data }){
  const { favorites, addFavorite, removeFavorite } = useAppStore()
  const fav = favorites.includes(data.id)

  return (
    <Card className="shadow-sm">
      <div style={{display:'flex', justifyContent:'space-between', gap:16}}>
        <div>
          <h3 className="h4" style={{margin:'0 0 4px', color:'var(--brand-primary)'}}>{data.name}</h3>
          <p className="small" style={{display:'flex', alignItems:'center', gap:6, color:'var(--text-secondary)'}}>
            <MapPin size={16} /> {data.address} • {data.distance} km • ~{minutesFromKm(data.distance)} min
          </p>
          <p className="small" style={{display:'flex', alignItems:'center', gap:6, marginTop:6, color:'var(--text-secondary)'}}>
            <Star size={16} color="#F59E0B" /> {data.rating}
          </p>
          <div style={{marginTop:8}}>
            {data.availability ? <Badge color="green">In Stock</Badge> : <Badge color="red">Out of Stock</Badge>}
          </div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="h3" style={{marginBottom:8}}>{formatINR(data.price)}</div>
          <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
            <Button variant="outline" onClick={()=>window.open(`tel:${data.phone}`,'_self')}><Phone size={16}/> Call</Button>
            <Link to={`/pharmacy/${data.id}`}><Button>View Details</Button></Link>
            <button className="btn btn-ghost" aria-label="favorite" onClick={()=> fav ? removeFavorite(data.id) : addFavorite(data.id)}>
              <Heart size={18} color={fav ? '#EF4444' : '#6B7280'} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
