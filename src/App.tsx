import { useState } from 'react'
import{Routes,Route} from 'react-router-dom'
import{Container} from 'react-bootstrap'
import {Home} from './pages/Home'
import {Store} from './pages/Store'
import {About} from './pages/About'
import {Navbar} from './components/Navbar'
import{FavouritesProvider} from './context/Favourites'



function App() {
 // const [count, setCount] = useState([])
  return(
    < FavouritesProvider>
   <Navbar/> 
  <Container>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </Container>
  </ FavouritesProvider>
  )
}

export default App
