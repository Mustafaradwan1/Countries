import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import { Countries } from './Pages/Countries'
import { CountryPages } from './Pages/CountryPages'
function App() {

  return (
    <>
    <div className=''>
      <Header/>
      <div className='container'>
        <HashRouter>
        <Routes>
          <Route path='/' element={<Countries/>} />
          <Route path='/Country/:name' element={<CountryPages/>} />
          <Route path='/alpha/:code' element={<CountryPages/>} />
        </Routes>
        </HashRouter>
      </div>
    </div>

    </>
  )
}

export default App
