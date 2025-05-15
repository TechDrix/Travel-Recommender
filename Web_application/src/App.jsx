import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from './pages/Routes'
import Footer from './components/footer'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <h1>Travel Recommendation</h1>
      <Pages/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
