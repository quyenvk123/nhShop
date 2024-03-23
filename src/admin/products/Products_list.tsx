
import { Link } from 'react-router-dom'
import { IProduct } from '../../interfaces/producst'
import { useContext } from 'react';
import { dataContext } from '../../contextProvider/Context';

const Products_list = () => {
    const { deleteProducrs, Dataproducts } = useContext(dataContext);
    return (
        <>
            <div className="container">
                <Link to={'/admin/products'}><button className='btn btn-primary my-4'>Thêm</button></Link>
                <table className="table table-bordered">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá sản phẩm mới</th>
                            <th scope="col">Ảnh sản phẩm</th>
                            <th scope="col">Mô tả sản phẩm</th>
                            <th scope="col">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(Dataproducts)?.map((item: IProduct, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><img src={item.img} width={100} alt="" /></td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <button onClick={() => deleteProducrs(item.id!)} className='btn btn-danger'>Xóa</button>
                                        <Link to={`/admin/products/${item.id}/edit`}><button className='btn btn-primary mx-4'>Sửa</button></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Products_list