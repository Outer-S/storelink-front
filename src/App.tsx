import {Home,Register,EmailConfirm,Dashboard} from './Components'
import { BrowserRouter, Routes , Route,Navigate} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<Home/>} />
        <Route path='/sign-up' element={<Register/>} />
        <Route path='/confirm_email/:userId' element= {<EmailConfirm/>} />
        <Route  path='/dashboard'   element={<Dashboard/>} />
        <Route path='/' element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
