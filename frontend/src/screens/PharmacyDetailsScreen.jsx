import { useParams, Link } from 'react-router-dom'
import { MOCK_PHARMACIES } from '../lib/mock'
import Card from '../components/Card'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { formatINR } from '../lib/utils'

export default function PharmacyDetailsScreen(){
  const { id } = useParams()
  const ph = MOCK_PHARMACIES.find(x=>x.id===id) || MOCK_PHARMACIES[0]
  return (
    <div className="container section">
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <div>
          <Card>
            <h2 className="h2" style={{marginTop:0}}>{ph.name}</h2>
            <div className="small" style={{color:'var(--text-secondary)', marginBottom:8}}>{ph.address}</div>
            {ph.availability ? <Badge color="green">In Stock</Badge> : <Badge color="red">Out of Stock</Badge>}
            <div className="sep" style={{margin:'16px 0'}}/>
            <div className="h3">Current price: {formatINR(ph.price)}</div>
            <div style={{display:'flex', gap:8, marginTop:12}}>
              <Button onClick={()=>window.open(`tel:${ph.phone}`,'_self')}>Call</Button>
              <Link to="/substitutes"><Button variant="outline">View Substitutes</Button></Link>
            </div>
          </Card>

          <Card style={{marginTop:16}}>
            <div className="h4">Operating Hours</div>
            <table className="table" style={{marginTop:8}}>
              <tbody>
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><tr key={d}><td className="small">{d}</td><td className="small">9:00 AM – 9:00 PM</td></tr>)}
              </tbody>
            </table>
          </Card>
        </div>

        <div>
          <Card>
            <div className="h4">Map Preview</div>
            <div className="bg-white border rounded-xl" style={{height:320, display:'grid', placeItems:'center', color:'#9CA3AF'}}>Map here</div>
          </Card>

          <Card style={{marginTop:16}}>
            <div className="h4">Reviews</div>
            <div className="small" style={{color:'var(--text-secondary)', marginTop:8}}>“Quick service & genuine meds.”</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
