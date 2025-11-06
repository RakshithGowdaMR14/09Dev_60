import { cn } from 'classnames'
export default function Button({ children, variant='primary', className, ...props }){
  const base = 'btn'
  const v = {
    primary:'btn-primary',
    outline:'btn-outline',
    ghost:'btn-ghost',
    danger:'btn-danger',
    green:'btn-green'
  }[variant] || 'btn-primary'
  return <button className={`${base} ${v} ${className||''}`} {...props}>{children}</button>
}
