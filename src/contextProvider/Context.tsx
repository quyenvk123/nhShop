import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { IProduct } from '../interfaces/producst';

type PropsContext = {
  Dataproducts: object,
  addProducts: (data: IProduct) => void,
  deleteProducrs: (id: number) => void
  updateProducts: (product: IProduct) => void
}
const dataContext = createContext({} as PropsContext);
const DataContext = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`);
        setProducts(data);
      } catch (error) {
        console.log(error);

      }
    })()
  }, []);

  const add = async (dataForm: IProduct) => {
    try {
      const { data } = await axios.post('http://localhost:3000/products', dataForm);
      setProducts([...products, data]);
      alert('Thêm thành công')
    } catch (error) {
      console.log(error);

    }
  }

  const deletePro = async (id: number) => {
    const comfim = confirm("Bạn có muốn xóa không")
    if (comfim) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        setProducts(products.filter((item) => item.id != id))
      } catch (error) {
        console.log(error);
      }
      alert("Xóa thành công")
    }

  };

  const updatePro = async (product: IProduct) => {
    try {
      const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))

    } catch (error) {
      console.log(error);

    }
    alert("Cập nhật thành công")
  }
  const dataProducts = {
    Dataproducts: products,
    addProducts: add,
    deleteProducrs: deletePro,
    updateProducts: updatePro
  }
  return (<>
    <dataContext.Provider value={dataProducts} >
      {children}
    </dataContext.Provider>
  </>)
}
export { dataContext, DataContext }
