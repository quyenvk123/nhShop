import { Link } from "react-router-dom"
import "../../../stytes/client/products_detalis/products.css"

const Products = () => {
  return (
   <>
           {/* ===== NEW ===== */}
           <section className="new">
  <div className="container">
    <div className="new-heading">
      <h1>New</h1>
    </div>
    <div className="products-body-item">
      <div className="products-body">
        <div className="item">
          <div className="item__img">
            <img src="../../src/assets/img/image 2.jpg" alt="" />
          </div>
          <div className="box__item">
            <div className="box_heading">
              <h1>Syltherine</h1>
            </div>
            <div className="box_text">
              <p>Stylish cafe chair</p>
            </div>
            <div className="box_price">
              <p className="price_left">2.500.000đ</p>
              <p className="price_right"> <s>3.500.000đ</s> </p>
            </div>
          </div>
          <div className="item_sale">
            -30%
          </div>
          {/* hover */}
          <div className="add_cart">
            <div className="block_add_cart">
            <Link to={'producst_detalis'} className="add_btn">View product</Link>
              <Link to={''} className="add_btn">Add to cart</Link>
              <div className="operation">
                <div className="sections">
                  <i className="fa-solid fa-share-nodes" />
                  <span>share</span>
                </div>
                <div className="sections">
                  <i className="fa-solid fa-right-left" />
                  <span>compare</span>
                </div>
                <div className="sections">
                  <i className="fa-regular fa-heart" />
                  <span>like</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-body">
        <div className="item">
          <div className="item__img">
            <img src="../../src/assets/img/image 2.jpg" alt="" />
          </div>
          <div className="box__item">
            <div className="box_heading">
              <h1>Syltherine</h1>
            </div>
            <div className="box_text">
              <p>Stylish cafe chair</p>
            </div>
            <div className="box_price">
              <p className="price_left">2.500.000đ</p>
              <p className="price_right"> <s>3.500.000đ</s> </p>
            </div>
          </div>
          <div className="item_sale">
            -30%
          </div>
          {/* hover */}
          <div className="add_cart">
            <div className="block_add_cart">
            <Link to={'producst_detalis'} className="add_btn">View product</Link>
              <Link to={''} className="add_btn">Add to cart</Link>
              <div className="operation">
                <div className="sections">
                  <i className="fa-solid fa-share-nodes" />
                  <span>share</span>
                </div>
                <div className="sections">
                  <i className="fa-solid fa-right-left" />
                  <span>compare</span>
                </div>
                <div className="sections">
                  <i className="fa-regular fa-heart" />
                  <span>like</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-body">
        <div className="item">
          <div className="item__img">
            <img src="../../src/assets/img/image 2.jpg" alt="" />
          </div>
          <div className="box__item">
            <div className="box_heading">
              <h1>Syltherine</h1>
            </div>
            <div className="box_text">
              <p>Stylish cafe chair</p>
            </div>
            <div className="box_price">
              <p className="price_left">2.500.000đ</p>
              <p className="price_right"> <s>3.500.000đ</s> </p>
            </div>
          </div>
          <div className="item_sale">
            -30%
          </div>
          {/* hover */}
          <div className="add_cart">
            <div className="block_add_cart">
            <Link to={'producst_detalis'} className="add_btn">View product</Link>
              <Link to={''} className="add_btn">Add to cart</Link>
              <div className="operation">
                <div className="sections">
                  <i className="fa-solid fa-share-nodes" />
                  <span>share</span>
                </div>
                <div className="sections">
                  <i className="fa-solid fa-right-left" />
                  <span>compare</span>
                </div>
                <div className="sections">
                  <i className="fa-regular fa-heart" />
                  <span>like</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-body">
        <div className="item">
          <div className="item__img">
            <img src="../../src/assets/img/image 2.jpg" alt="" />
          </div>
          <div className="box__item">
            <div className="box_heading">
              <h1>Syltherine</h1>
            </div>
            <div className="box_text">
              <p>Stylish cafe chair</p>
            </div>
            <div className="box_price">
              <p className="price_left">2.500.000đ</p>
              <p className="price_right"> <s>3.500.000đ</s> </p>
            </div>
          </div>
          <div className="item_sale">
            -30%
          </div>
          {/* hover */}
          <div className="add_cart">
            <div className="block_add_cart">
              <Link to={'producst_detalis'} className="add_btn">View product</Link>
              <Link to={''} className="add_btn">Add to cart</Link>
              <div className="operation">
                <div className="sections">
                  <i className="fa-solid fa-share-nodes" />
                  <span>share</span>
                </div>
                <div className="sections">
                  <i className="fa-solid fa-right-left" />
                  <span>compare</span>
                </div>
                <div className="sections">
                  <i className="fa-regular fa-heart" />
                  <span>like</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-block-button">
                    <button className="item-block-bnt">Show More</button>
                </div>
    </div>
  </div>
</section>
{/* ===== END  NEW ===== */}

   </>
  )
}

export default Products