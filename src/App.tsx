
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './views'
import ClientPage from './views/client/HomePage/Index'
import Cart from './views/client/cart/Cart'
import Products__all_details from './views/client/product__details/Products__all_details'
import CheckOut from './views/client/checkOut/CheckOut'
import Products from './admin/products/Products'
import Home_admin from './admin/Home_admin'
import Products_list from './admin/products/Products_list'

import Products_update from './admin/products/Products_update'
import Shop_all from './views/client/shop/Shop_all'



function App() {

  return (
    <>



      <div className="CLIENT_PAGE">
        <Routes>
          <Route path='/' element={<Index />}>
            <Route index element={<ClientPage />} />
            <Route path='cart' element={<Cart />} />
            <Route path='producst_detalis/:id' element={<Products__all_details />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='shop' element={<Shop_all />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<Home_admin />} />
            <Route path='products_list' element={<Products_list />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id/edit' element={<Products_update />} />


          </Route>
        </Routes>
      </div>


    </>
  )

}

export default App
