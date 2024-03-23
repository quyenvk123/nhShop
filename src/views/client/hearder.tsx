import { NavLink } from "react-router-dom"
import "../../stytes/header.css"
const Hearder = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <NavLink to={'/'}> <img src="../../src/assets/img/Frame 168logo.svg" alt="" /></NavLink>
            <nav className="header-main">
              <ul className="main-menu__list">
                <li className="main-menu__item"><NavLink className={({ isActive }) => isActive ? 'active_link nav_link' : ' '} to={'/'}>Home</NavLink></li>
                <li className="main-menu__item"><NavLink className={({ isActive }) => isActive ? 'active_link nav_link' : ' '} to={'shop'} >Shop</NavLink></li>
                <li className="main-menu__item"><NavLink className={({ isActive }) => isActive ? 'active_link nav_link' : ' '} to={'about'} >About</NavLink></li>
                <li className="main-menu__item"><NavLink className={({ isActive }) => isActive ? 'active_link nav_link' : ' '} to={'contact'} >Contact</NavLink></li>
              </ul>
            </nav>
            <div className="header-block">
              <div className="user">
                <NavLink className='user' to={'/admin'}><img src="../../src/assets/img/mdi_account-alert-outlineuser.png" alt="" /></NavLink>
              </div>
              <div className="search">
                <NavLink className='search' to={''}><img src="../../src/assets/img/akar-icons_searchsearch.png" alt="" /></NavLink>
              </div>
              <div className="wishlist">
                <NavLink className='wishlist' to={''}><img src="../../src/assets/img/akar-icons_heartheart.png" alt="" /></NavLink>
              </div>
              <div className="cart">
                <NavLink className='cart' to={'checkout'}><img src="../../src/assets/img/ant-design_shopping-cart-outlinedcart.png" alt="" /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Hearder