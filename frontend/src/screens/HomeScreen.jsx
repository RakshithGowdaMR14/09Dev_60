import { motion, useMotionValue, useTransform } from 'motion/react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function HomeScreen(){
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const parX = useTransform(mouseX, [-500,500], [-20,20])
  const parY = useTransform(mouseY, [-500,500], [-12,12])

  return (
    <div className="grad-hero" onMouseMove={(e)=>{mouseX.set(e.clientX- window.innerWidth/2); mouseY.set(e.clientY- window.innerHeight/2)}}>
      <header className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'24px 0'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <div className="grad-primary rounded-xl" style={{width:40,height:40, display:'grid', placeItems:'center', color:'#fff'}}>💊</div>
          <strong>Smart Medicine Locator</strong>
        </div>
        <Link to="/login" className="btn btn-outline">Profile</Link>
      </header>

      <section className="container section" style={{display:'grid', gridTemplateColumns:'1.1fr .9fr', gap:32}}>
        {/* Left */}
        <div>
          <div className="badge badge-blue" style={{marginBottom:16}}>✨ Healthcare Simplified</div>
          <h1 className="h-hero" style={{margin:'0 0 12px'}}>Find Your Medicine <span className="gradient-text">Faster & Cheaper</span></h1>
          <p className="body-lg" style={{color:'var(--text-secondary)', marginBottom:24}}>
            Compare prices across verified pharmacies and locate nearest in-stock options instantly.
          </p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link to="/upload" className="btn btn-primary" style={{boxShadow:'var(--shadow-2xl)'}}>📤 Upload Prescription</Link>
            <Link to="/search" className="btn btn-outline" >🔎 Manual Search</Link>
          </div>

          <div style={{display:'flex', gap:24, marginTop:28}}>
            <Stat label="Pharmacies" value="500+" />
            <Stat label="Users" value="50K+" />
            <Stat label="Satisfaction" value="98%" />
          </div>
        </div>

        {/* Right visual */}
        <div style={{position:'relative', minHeight:420}}>
          <motion.div style={{position:'absolute', inset:0, x:parX, y:parY}}>
            <img
              src="https://images.unsplash.com/photo-1596522016734-8e6136fe5cfa?q=80&w=900&auto=format&fit=crop"
              alt="Pharmacy"
              className="rounded-2xl"
              style={{width:'100%', height:384, objectFit:'cover', boxShadow:'var(--shadow-xl)'}}
            />
          </motion.div>
          {/* Floating cards */}
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.2}} className="card" style={{position:'absolute', top:12, left:-10}}>
            <div className="small" style={{color:'var(--accent-green)'}}>📉 Save up to 40%</div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.3}} className="card" style={{position:'absolute', right:-10, bottom:20}}>
            <div className="small" style={{color:'var(--brand-primary)'}}>🛡️ Verified Pharmacies</div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:.4}} className="card" style={{position:'absolute', right:40, top:90}}>
            <div className="small">⭐ 4.9/5</div>
          </motion.div>
        </div>
      </section>

      <section className="container section">
        <div className="grid grid-3">
          <Feature title="Best Prices" desc="Compare across stores instantly">💸</Feature>
          <Feature title="Nearby Locations" desc="See distance & travel time">📍</Feature>
          <Feature title="Real-time Stock" desc="Know what's in stock now">⚡</Feature>
        </div>
      </section>
    </div>
  )
}

function Stat({label, value}) {
  return (
    <div className="card" style={{minWidth:140}}>
      <div className="h3" style={{marginBottom:4}}>{value}</div>
      <div className="xs" style={{color:'var(--text-secondary)'}}>{label}</div>
    </div>
  )
}

function Feature({children, title, desc}){
  return (
    <div className="card">
      <div style={{fontSize:28}}>{children}</div>
      <div className="h4" style={{marginTop:8, marginBottom:6}}>{title}</div>
      <div className="small" style={{color:'var(--text-secondary)'}}>{desc}</div>
    </div>
  )
}
