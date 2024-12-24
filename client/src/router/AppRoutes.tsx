import { Route, Routes } from 'react-router-dom'
import DashBoard from '../components/DashBoard'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
    </Routes>
  )
}
