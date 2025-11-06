import { SUBSTITUTES } from '../lib/mock'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'

export default function SubstitutesScreen(){
  return (
    <div className="container section">
      <h2 className="h2">Substitute Medicines</h2>
      <div className="grid grid-3" style={{marginTop:12}}>
        {SUBSTITUTES.map(s=>(
          <Card key={s.id}>
            <div className="h4">{s.name}</div>
            <div className="small" style={{color:'var(--text-secondary)'}}>{s.manufacturer} • {s.strength}</div>
            <div style={{display:'flex', gap:8, margin:'8px 0'}}>
              <Badge color="blue">Similarity {(s.similarity*100).toFixed(0)}%</Badge>
              <Badge color={s.availability==='high'?'green':'red'}>Availability {s.availability}</Badge>
            </div>
            <div className="h3" style={{marginBottom:8}}>₹{s.price} <span className="small" style={{color:'var(--accent-green)'}}>save {s.savings}</span></div>
            <div style={{display:'flex', gap:8}}>
              <Button variant="outline">Compare</Button>
              <Button>Select</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
