import { useEffect, useState } from "react"
import "../../../stytes/client/products_detalis/producst_detalis.css"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { IProduct } from "../../../interfaces/producst"
// import { dataContext } from "../../../contextProvider/Context"

const Products_detalis = () => {
  const [products, SetProducts] = useState<IProduct[]>([])
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`)
        SetProducts(data)
      } catch (error) {
        console.log(error);

      }
    })()
  }, [id]);

  return (
    <>
      {/* ==== PRODUCTS__DETAILS ==== */}
      <section className="products-detalis">
        <div className="container">
          <div className="products-detalis__item">
            <div className="prodcus-detalis__left">
              <div className="prodcus-detalis__left__img--small">
                <img src="img/products_detalis/sofa 1.png" alt='' />
                <img src="img/products_detalis/sofa 2.png" alt='' />
                <img src="img/products_detalis/sofa 3.png" alt='' />
                <img src="img/products_detalis/sofa 4.png" alt='' />
              </div>
              <div className="prodcus-detalis__left__img--big">
                <img src={products.img} alt='' />
              </div>
            </div>
            <div className="prodcus-detalis__right">
              <p className="tilte__name">{products.name}</p>
              <p className="price__color">{products.price}</p>
              <div className="prodcus-detalis__right-evaluste">
                <div className="evaluste__star">
                  <img src="../../src/assets/img/products_detalis/Vector.png" alt='' />
                  <img src="../../src/assets/img/products_detalis/Vector.png" alt='' />
                  <img src="../../src/assets/img/products_detalis/Vector.png" alt='' />
                  <img src="../../src/assets/img/products_detalis/Vector.png" alt='' />
                  <img src="img/products_detalis/Vector 1.png" alt='' />
                </div>
                <span className="evaluste__text">5 Customer Review</span>
              </div>
              <p className="desc">
                {products.desc}
              </p>
              <div className="prodcus-detalis__right-size">
                <p className="size__name">Size</p>
                <div className="size__button">
                  <button className="size__button--btn">S</button>
                  <button className="size__button--btn">XL</button>
                  <button className="size__button--btn">XS</button>
                </div>
              </div>
              <div className="prodcus-detalis__right-color">
                <p className="size__name">Color</p>
                <div className="size__button">
                  <button className="color__button--color blue" />
                  <button className="color__button--color black" />
                  <button className="color__button--color orange" />
                </div>
              </div>
              <div className="prodcus-detalis__right-cart">
                <div className="cart__btn--quality">
                  <button className="btn--quality__box"> - </button>
                  <button className="btn--quality__box">1</button>
                  <button className="btn--quality__box"> + </button>
                </div>
                <Link to={'/cart'}><button className="cart__btn">Add To Cart</button></Link>
                <Link to={''}><button className="cart__btn">+ Compare</button></Link>
              </div>
              <div className="prodcus-detalis__right-block">
                <div className="block__left">
                  <div className="block--name">SKU</div>
                  <div className="block--name">Category</div>
                  <div className="block--name">Tags</div>
                  <div className="block--name">Share</div>
                </div>
                <div className="block__left">
                  <div className="block--name">:</div>
                  <div className="block--name">:</div>
                  <div className="block--name">:</div>
                  <div className="block--name">:</div>
                </div>
                <div className="block__left">
                  <div className="block--name">SS001</div>
                  <div className="block--name">Sofas</div>
                  <div className="block--name">Sofa, Chair, Home, Shop</div>
                  <div className="block--name">
                    <a href="#" className="block--link"><i className="fa-brands fa-facebook" /></a>
                    <a href="#" className="block--link"><i className="fa-brands fa-invision" /></a>
                    <a href="#" className="block--link"><i className="fa-brands fa-square-twitter" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== END PRODUCTS__DETAILS ==== */}

    </>
  )
}

export default Products_detalis