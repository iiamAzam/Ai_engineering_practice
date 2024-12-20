import {Router,Route,Routes} from 'react-router'
import './App.css'
import Homepage from './pages/homepage'

function App() {


  return (
    <>
      <Routes  >
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
