import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import ProductScreen from './screens/ProductScreen'
import AdminScreen from './screens/AdminScreen'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/auth' element={<AuthScreen />} />
        <Route path='/product' element={<ProductScreen />} />
        <Route path='/admin' element={<AdminScreen />} />
      </Routes>
    </div>
  )
}

export default App