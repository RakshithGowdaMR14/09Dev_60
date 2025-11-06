import Card from '../components/Card'
import Button from '../components/Button'
import { useAppStore } from '../lib/store'

export default function ProfileScreen(){
  const { history, favorites } = useAppStore()
  return (
    <div className="container section">
      <div className="grid grid-3">
        <Card>
          <div className="h3">User</div>
          <div className="small" style={{color:'var(--text-secondary)'}}>Keerthi • demo@medicine.app</div>
          <Button variant="outline" style={{marginTop:8}}>Edit Profile</Button>
        </Card>
        <Card>
          <div className="h3">Favorites</div>
          <div className="small">{favorites.length} saved</div>
        </Card>
        <Card>
          <div className="h3">Search History</div>
          <ul className="small" style={{marginTop:8}}>
            {history.map(h=><li key={h}>• {h}</li>)}
          </ul>
        </Card>
      </div>
      <Button variant="danger" style={{marginTop:16}}>Logout</Button>
    </div>
  )
}
