import "../../../stytes/client/cart/cart.css"
import Banner from "../HomePage/Banner"

const Cart = () => {
  return (
    <>
    <div className="Cart_component">
        <Banner/>
{/* ==== CART ==== */}
<section className="cart">
  <div className="container">
    <div className="cart-block">
      <div className="cart-detalis">
        <table className="cart-detalis-table">
          <thead className="table-thead">
            <tr>
              <th />
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody className="table-tbody">
            <tr>
              <td>
                <div className="table-tbody__img">
                  <img src="img/products_detalis/sofa 2.png" alt='' />
                </div>
              </td>
              <td>
                <span className="table-tbody__name">Asgaard sofa</span>
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <input type="number" className="table-tbody__input" />
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <div className="table-body__icon">
                  <i className="fa-solid fa-trash" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-tbody__img">
                  <img src="img/products_detalis/sofa 2.png" alt="" />
                </div>
              </td>
              <td>
                <span className="table-tbody__name">Asgaard sofa</span>
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <input type="number" className="table-tbody__input" />
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <div className="table-body__icon">
                  <i className="fa-solid fa-trash" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-tbody__img">
                  <img src="img/products_detalis/sofa 2.png" alt='' />
                </div>
              </td>
              <td>
                <span className="table-tbody__name">Asgaard sofa</span>
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <input type="number" className="table-tbody__input" />
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <div className="table-body__icon">
                  <i className="fa-solid fa-trash" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-tbody__img">
                  <img src="img/products_detalis/sofa 2.png" alt='' />
                </div>
              </td>
              <td>
                <span className="table-tbody__name">Asgaard sofa</span>
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <input type="number" className="table-tbody__input" />
              </td>
              <td>
                <span className="table-tbody__name">25.000.000đ</span>
              </td>
              <td>
                <div className="table-body__icon">
                  <i className="fa-solid fa-trash" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-totals">
        <h2 className="cart-totals__heading">
          Cart Totals
        </h2>
        <div className="cart-totals-block">
          <div className="cart-totals-block__text">
            <p className="cart-totals-block__name">Subtotal</p>
            <p className="cart-totals-block__name">Total</p>
          </div>
          <div className="cart-totals-block__number">
            <p className="cart-totals-block__number--name price">25.000.000đ</p>
            <p className="cart-totals-block__number--name color">25.000.000đ</p>
          </div>
        </div>
        <button className="cart-totals__btn">Check Out</button>
      </div>
    </div>
  </div>
</section>
{/* ===== END CART ===== */}
    </div>


    </>
  )
}

export default Cart