import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Pages from './pages/Routes'
import Footer from './components/footer'
import Navbar from './components/navbar'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Pages/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
