
import Hearder from './client/hearder'
import Footer from './client/footer'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <>
   <Hearder/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default Index