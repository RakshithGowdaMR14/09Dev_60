// Header.jsx
import { Link, useLocation } from 'react-router-dom'
import { User } from 'lucide-react'
export default function Header(){
  const { pathname } = useLocation()
  return (
    <header className="bg-white border" style={{position:'sticky', top:0, zIndex:20}}>
      <div className="container" style={{display:'flex', alignItems:'center', height:64, justifyContent:'space-between'}}>
        <nav style={{display:'flex', gap:16}}>
          <Link to="/search" className="small" style={{color: pathname==='/search'?'var(--brand-primary)':'var(--text)'}}></Link>
        </nav>
      </div>
    </header>
  )
}
