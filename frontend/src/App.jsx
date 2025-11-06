import './App.css'
import Signup from './pages/signup'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
