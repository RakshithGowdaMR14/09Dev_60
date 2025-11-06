import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function UploadPrescriptionScreen(){
  const [step, setStep] = useState(1)
  return (
    <div className="container section">
      <div className="h2">Upload Prescription</div>
      <div className="progress" style={{margin:'12px 0'}}><span style={{width:`${step*25}%`}}/></div>

      {step===1 && <Card>
        <div className="h4">Step 1: Upload</div>
        <div className="bg-surface border rounded-2xl" style={{height:180, display:'grid', placeItems:'center', color:'#9CA3AF', borderStyle:'dashed'}}>Drag & drop or click to upload</div>
      </Card>}
      {step===2 && <Card><div className="h4">Step 2: Processing</div><div className="small">Scanning your prescription...</div></Card>}
      {step===3 && <Card><div className="h4">Step 3: Review</div><div className="small">Detected: Paracetamol 650</div></Card>}
      {step===4 && <Card><div className="h4">Complete</div><div className="small">Successfully processed.</div></Card>}

      <div style={{display:'flex', gap:8, marginTop:12}}>
        <Button variant="outline" onClick={()=>setStep(s=>Math.max(1,s-1))}>Back</Button>
        <Button onClick={()=>setStep(s=>Math.min(4,s+1))}>{step<4?'Continue':'Finish'}</Button>
      </div>
    </div>
  )
}
