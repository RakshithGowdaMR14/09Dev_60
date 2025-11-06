import { Link, useLocation } from 'react-router-dom'
import { User } from 'lucide-react'
export default function Footer(){
  return (
    <footer className="bg-white border" style={{marginTop:40}}>
      <div className="container" style={{height:64, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span className="xs">© {new Date().getFullYear()} Smart Medicine Locator</span>
        <span className="xs">Powered by React + Vite • FastAPI</span>
      </div>
    </footer>
  )
}
