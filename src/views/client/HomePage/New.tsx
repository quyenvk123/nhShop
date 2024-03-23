import { Link } from "react-router-dom"
import "../../../stytes/client/homepage/new.css"
import { dataContext } from "../../../contextProvider/Context"
import { useContext } from "react"
const New = () => {
  const { Dataproducts } = useContext(dataContext)


  const newproducts = Object.values(Dataproducts).slice(0, 4);


  return (
    <>
      {/* ===== NEW ===== */}
      <section className="new">
        <div className="container">
          <div className="new-heading">
            <h1>New</h1>
          </div>
          <div className="products-body-item">
            {Object.values(newproducts).map((item, index) => {
              return (
                <>
                  <div className="products-body" key={index}>
                    <div className="item">
                      <div className="item__img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="box__item">
                        <h1 className="box_heading">{item.name}</h1>
                        <div className="box_text">
                          <p>{item.desc}</p>
                        </div>
                        <div className="box_price">
                          <p className="price_left">{item.price}</p>
                          <p className="price_right"> <s>10000đ</s> </p>
                        </div>
                      </div>
                      <div className="item_sale">
                        -30%
                      </div>
                      {/* hover */}
                      <div className="add_cart">
                        <div className="block_add_cart">
                          <Link to={`producst_detalis/${item.id}`} className="add_btn">View product</Link>
                          <Link to={'/cart'} className="add_btn">Add to cart</Link>
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
                </>
              )
            })}

          </div>
        </div>
      </section>
      {/* ===== END  NEW ===== */}

    </>
  )
}

export default New