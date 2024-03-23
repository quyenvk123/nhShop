import Banner from "../HomePage/Banner"
import Services from "../HomePage/Services"
import Filter from "./Filter"
import Shop from "./Shop"
import Next from "./next"


const Shop_all = () => {
    return (
        <>
            <Banner />
            <Filter />
            <Shop />
            <Next />
            <Services />
        </>
    )
}

export default Shop_all