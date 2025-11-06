export const MOCK_PHARMACIES = [
  { id:'ap1', name:'Apollo Pharmacy', lat:12.972, lng:77.594, address:'MG Road, Bengaluru', distance:1.2, price:120, rating:4.8, availability:true, phone:'+91-90000-12345' },
  { id:'mp1', name:'MedPlus', lat:12.978, lng:77.59, address:'Church St, Bengaluru', distance:2.0, price:115, rating:4.6, availability:true, phone:'+91-90000-22222' },
  { id:'wf1', name:'Wellness Forever', lat:12.969, lng:77.6, address:'Residency Rd, Bengaluru', distance:2.6, price:135, rating:4.5, availability:false, phone:'+91-90000-33333' }
]

export const POPULAR = ['Paracetamol', 'Azithromycin', 'Amoxicillin', 'Dolo 650', 'Cetirizine']

export const MOCK_USER = { id:'u1', name:'Keerthi', email:'demo@medicine.app' }

export const SUBSTITUTES = [
  { id:'s1', name:'Paracetamol 650', manufacturer:'Acme Labs', strength:'650mg', price:18, savings:'12%', similarity:0.94, availability:'high' },
  { id:'s2', name:'Acetaminophen 650', manufacturer:'GoodMeds', strength:'650mg', price:17, savings:'16%', similarity:0.91, availability:'medium' }
]
