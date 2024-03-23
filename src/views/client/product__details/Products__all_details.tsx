import Desc from "./Desc"
import Products from "./Products"
import Products_detalis from "./Products_detalis"
import Sections_Block from "./Sections_Block"



const Products__all_details = () => {
  return (
    <>
    <Sections_Block/>
    <Products_detalis/>
    <Desc/>
      <Products/>
    </>
  )
}

export default Products__all_details