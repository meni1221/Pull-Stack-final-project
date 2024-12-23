import Layout from './layout/Layout'
import AppRoutes from './router/AppRoutes'

function App() {
  return (
    <Layout children={<AppRoutes/>}/>
  )
}

export default App