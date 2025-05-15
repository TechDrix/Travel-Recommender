import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from './pages/Routes'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <h1>Travel Recommendation</h1>
      <Pages/>
      </BrowserRouter>
    </>
  )
}

export default App
