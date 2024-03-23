
import { Link } from "react-router-dom"
import "../../stytes/footer.css"
const Footer = () => {
  return (
    <>
{/* ===== FOOTER ===== */}
<footer>
  <div className="container">
    <div className="footer-top">
      <div className="footer-top__logo">
        <Link to={'/'}><h2 className="footer-top__logo--name">Funiro.</h2></Link>
        <span className="footer-top__logo--text">400 University Drive Suite 200 Coral <br /> Gables, FL 33134
          USA</span>
      </div>
      <div className="footer-top__box">
        <div className="footer-top__box--row">
          <ul className="footer-top__box--col">
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link__color">Links</a>
            </li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">Home</a>
            </li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">Shop</a></li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">About</a></li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">Contact</a></li>
          </ul>
          <ul className="footer-top__box--col">
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link__color">Help</a>
            </li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">Payment
                Options</a>
            </li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">Returns</a></li>
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link">Privacy
                Policies</a>
            </li>
          </ul>
          <ul className="footer-top__box--col">
            <li className="footer-top__box--name"><a href="#" className="footer-top__box--link__color">Newsletter</a></li>
            <input type="text" className="footer-top__box--input" placeholder=" Enter Your Email Address" />
            <button className="footer-top__box--btn">SUBSCRIBE</button>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-bottom--desc">2023 furino. All rights reverved</span>
    </div>
  </div>
</footer>
{/* ===== END FOOTER ===== */}


    </>
  )
}

export default Footer