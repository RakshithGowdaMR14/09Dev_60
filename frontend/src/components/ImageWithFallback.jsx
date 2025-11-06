import { useState } from 'react'
export default function ImageWithFallback({ src, alt, className, fallback='placeholder' }){
  const [err, setErr] = useState(false)
  if(err) return (
    <div className={`bg-surface border rounded-xl ${className}`} style={{display:'grid',placeItems:'center',color:'#9CA3AF'}}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14" stroke="#9CA3AF" strokeWidth="1.5"/><path d="M3 19l4-4a2 2 0 0 1 2.828 0L14 19" stroke="#9CA3AF" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="#9CA3AF"/></svg>
    </div>
  )
  return <img src={src} alt={alt} onError={()=>setErr(true)} className={className} />
}
