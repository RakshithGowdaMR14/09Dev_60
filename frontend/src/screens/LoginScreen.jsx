import { useForm } from 'react-hook-form'
import { Mail, Lock, Eye, EyeOff, Shield, Star, TrendingUp } from 'lucide-react'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'motion/react'

export default function LoginScreen(){
  const { register, handleSubmit } = useForm()
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (vals)=>{
    // mock auth
    toast.success('Signed in')
    navigate('/onboarding')
  }

  return (
    <div style={{display:'flex', minHeight:'100vh'}}>
      {/* Left panel (hidden on small screens via inline styles) */}
      <div className="grad-primary" style={{flex:1, color:'#fff', position:'relative', display:'none', padding:'48px', overflow:'hidden'}}>
        {/* show at >= 900px */}
        <div className="container" style={{display:'flex', flexDirection:'column', height:'100%'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <div className="bg-white rounded-xl" style={{width:44, height:44, display:'grid', placeItems:'center', color:'var(--brand-primary)', fontWeight:800}}>💊</div>
            <div style={{fontWeight:800}}>Smart Medicine Locator</div>
          </div>

          <div style={{flex:1, display:'grid', placeItems:'center', textAlign:'left'}}>
            <div>
              <h1 className="h1" style={{color:'#fff', marginBottom:8}}>Find Your Medicine, Save Money</h1>
              <p className="body-lg" style={{color:'rgba(255,255,255,.85)'}}>Compare 500+ pharmacies in seconds.</p>
              <motion.img
                initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}
                src="https://images.unsplash.com/photo-1582146804102-b4a01b0a51ae?q=80&w=1200&auto=format&fit=crop"
                alt="Pharmacy Pro"
                style={{marginTop:24, width:'100%', maxWidth:520, borderRadius:16, boxShadow:'var(--shadow-2xl)'}}
              />
            </div>
          </div>

          <div style={{display:'flex', gap:16, alignItems:'center', marginTop:24}}>
            <div style={{display:'flex', gap:8, alignItems:'center'}}><Shield/> 500+ pharmacies</div>
            <div style={{display:'flex', gap:8, alignItems:'center'}}><Star/> 4.8 rating</div>
            <div style={{display:'flex', gap:8, alignItems:'center'}}><TrendingUp/> 100K+ users</div>
          </div>
        </div>
      </div>

      {/* Right panel (form) */}
      <div style={{flex:'0 0 560px', display:'grid', placeItems:'center', padding:'48px'}}>
        <Card className="shadow-sm" >
          <h2 className="h2" style={{marginBottom:8}}>Welcome back</h2>
          <p className="small" style={{color:'var(--text-secondary)', marginBottom:16}}>Sign in to continue</p>
          <form onSubmit={handleSubmit(onSubmit)} style={{display:'grid', gap:12, width: 'min(420px, 80vw)'}}>
            <label className="small">Email</label>
            <div style={{position:'relative'}}>
              <Input type="email" placeholder="you@example.com" {...register('email')} />
              <Mail size={18} style={{position:'absolute', right:12, top:14, color:'#9CA3AF'}} />
            </div>
            <label className="small" style={{marginTop:8}}>Password</label>
            <div style={{position:'relative'}}>
              <Input type={show?'text':'password'} placeholder="••••••••" {...register('password')} />
              <button type="button" onClick={()=>setShow(s=>!s)} style={{position:'absolute', right:8, top:8}} className="btn btn-ghost">
                {show ? <EyeOff size={18}/> : <Eye size={18}/>}
              </button>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:6}}>
              <label className="small" style={{display:'flex', alignItems:'center', gap:8}}>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot" className="small" style={{color:'var(--brand-primary)'}}>Forgot password?</Link>
            </div>
            <Button type="submit" style={{marginTop:8}}>Sign In</Button>
            <Button type="button" variant="outline" onClick={()=>toast.message('Demo sign-in')} >Use Demo Account</Button>
            <div className="sep" style={{margin:'8px 0'}}/>
            <div style={{display:'flex', gap:8}}>
              <Button variant="outline"><img alt="g" width="16" src="https://www.svgrepo.com/show/475656/google-color.svg"/> Google</Button>
              <Button variant="outline"><img alt="gh" width="16" src="https://www.svgrepo.com/show/475654/github-color.svg"/> GitHub</Button>
            </div>
            <div className="small" style={{marginTop:8}}>No account? <Link to="/signup" style={{color:'var(--brand-primary)'}}>Sign up</Link></div>
          </form>
        </Card>
      </div>
    </div>
  )
}
