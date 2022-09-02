import {Home,Register,EmailConfirm,Dashboard} from './Components'
import { BrowserRouter, Routes , Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<Home/>} />
        <Route path='/sign-up' element={<Register/>} />
        <Route path='/confirm_email/:userId' element= {<EmailConfirm/>} />
        <Route  path='/dashboard'   element={<Dashboard/>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
