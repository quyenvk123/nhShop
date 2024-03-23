import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { dataContext } from "../../contextProvider/Context"

type Inputs = {
    name: string,
    price: number,
    price_old: number
    img: string,
    desc: string
}
const Products = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const { addProducts } = useContext(dataContext);
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        addProducts(data)
        navigate("/admin/products_list")
    }
    return (
        <>
            <div className="container">
                <h1 className="my-4">Thêm sản phẩm</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                        <input type="text" {...register("name", { required: true })} className="form-control" id="name" />
                        {errors.name && errors.name.type === "required" && <div className="form-text">Bắt buộc nhập</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                        <input type="text"  {...register("price", { required: true, validate: (value) => !isNaN(value) })} className="form-control" id="price" />
                        {errors.price && errors.price.type === "required" && <div className="form-text">Bắt buộc nhập</div>}
                        {errors.price && errors.price.type === "validate" && <div className="form-text">Bắt buộc phải là số</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Ảnh sản phẩm</label>
                        <input type="text" className="form-control"  {...register("img")} id="img" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Mô tả sản phẩm</label>
                        <textarea id="desc" className="form-control"  {...register("desc")}></textarea>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                    <Link to={'/admin/products_list'}><button className="btn btn-primary mx-5">Danh sách</button></Link>
                </form>
            </div >


        </>
    )
}

export default Products