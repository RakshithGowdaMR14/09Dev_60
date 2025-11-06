import axios from 'axios'
const API_BASE = 'http://127.0.0.1:8000'

export async function searchMedicine(medicine){
  const url = `${API_BASE}/api/search?medicine=${encodeURIComponent(medicine)}`
  try {
    const { data } = await axios.get(url)
    return data.results || data.pharmacies || []
  } catch(e){
    console.error(e)
    return []
  }
}
