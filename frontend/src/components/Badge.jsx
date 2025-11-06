export default function Badge({ color='blue', children }){
  const c = color==='green' ? 'badge badge-green' : color==='red' ? 'badge badge-red' : 'badge badge-blue'
  return <span className={c}>{children}</span>
}
