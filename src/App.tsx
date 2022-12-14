import {Home,Register,EmailConfirm,Dashboard ,InventoryForm} from './Components'
import { BrowserRouter, Routes , Route,Navigate} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<Home/>} />
        <Route path='/sign-up' element={<Register/>} />
        <Route path='/confirm_email/:userId' element= {<EmailConfirm/>} />
        <Route  path='/dashboard'   element={<Dashboard/>} >
          <Route path='/dashboard/create-inventory' element= {<InventoryForm/>} />
        </Route>
        <Route path='/' element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
