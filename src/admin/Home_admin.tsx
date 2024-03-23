import { Link } from "react-router-dom"


const Home_admin = () => {
  return (
    <>
      <div className="container">
        <Link to={`/`}><button className="btn btn-primary my-5">Trang chủ</button></Link>
        <Link to={`/admin/products_list`}><button className="btn btn-primary my-5 mx-5">Danh sách</button></Link>
        <h1>Home admin</h1>
      </div>

    </>
  )
}

export default Home_admin