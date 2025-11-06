import { useMemo, useState } from 'react'
import Card from './Card'
import Badge from './Badge'

export default function MapView({ items=[], selectedId, onSelect }){
  // normalize lat/lng into SVG coordinates
  const bounds = useMemo(()=>{
    if(items.length===0) return null
    const lats = items.map(i=>i.lat), lngs = items.map(i=>i.lng)
    return { minLat: Math.min(...lats), maxLat: Math.max(...lats), minLng: Math.min(...lngs), maxLng: Math.max(...lngs) }
  }, [items])

  const toXY = (lat, lng) => {
    if(!bounds) return {x:0,y:0}
    const w = 800, h=420
    const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng + 1e-6)) * (w-40) + 20
    const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat + 1e-6)) * (h-40) + 20
    return {x,y}
  }

  return (
    <Card>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
        <div className="h4">Map View</div>
        <Badge color="blue">{items.length} locations</Badge>
      </div>
      <div style={{width:'100%', overflow:'auto'}}>
        <svg width="100%" viewBox="0 0 840 460" style={{background:'url("data:image/svg+xml;utf8,\
<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><rect width=\'40\' height=\'40\' fill=\'white\'/><path d=\'M0 40 L40 40 M40 0 L40 40\' stroke=\'#E5E7EB\' stroke-width=\'1\'/></svg>")'}}>
          {items.map(p=>{
            const {x,y} = toXY(p.lat, p.lng)
            const fill = p.availability ? '#10B981' : '#EF4444'
            const isSel = selectedId===p.id
            return (
              <g key={p.id} onClick={()=>onSelect?.(p)} style={{cursor:'pointer'}}>
                <filter id="dropshadow"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.2"/></filter>
                <path filter="url(#dropshadow)" d={`M ${x} ${y} l 8 16 l -16 0 Z`} fill={fill} opacity={isSel?1:0.9}/>
                <circle cx={x} cy={y} r={8} fill={fill} stroke="#fff" strokeWidth="2" />
                <title>{p.name} • {p.distance}km • ₹{p.price}</title>
              </g>
            )
          })}
        </svg>
      </div>
    </Card>
  )
}
