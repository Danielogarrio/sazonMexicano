import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../asyncMock'
import Item from './Item/Item'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ saludo }) => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)


  const { categoryName } = useParams()


  useEffect(() => {
    // getProductos()
    //   .then((res) => setProductos(res))
    //   .catch()
    //   .finally(()=>setCargando(false))
    setCargando(true)

    //DESDE API

    // if(categoryName){
    //   fetch(`https://5e1552e14e314335992aeeae7d8894b9.api.mockbin.io//products/category/${categoryName}`)
    //         .then(res=>res.json())
    //         .then(json=>setProductos(json))
    //         .finally(setCargando(false))
    // }else{
    //   fetch("https://5e1552e14e314335992aeeae7d8894b9.api.mockbin.io//products")
    //     .then(data => data.json())
    //     .then(res => setProductos(res))
    //     .finally(setCargando(false))
    // }

    //DESDE ASYNCMOCK
    if (categoryName) {
      getProductosPorCategoria(categoryName).then(res => setProductos(res)).finally(setCargando(false))
    } else {
      getProductos().then(res => setProductos(res))
        .finally(setCargando(false))
    }

  }, [categoryName])



  if (cargando) {
    return (
      <h2>cargando.......</h2>
    )
  }

  return (
    <div>
      {productos.map((el) => {
        return (
          <Item key={el.id} producto={el} />
        )
      })}
    </div>
  )
}

export default ItemListContainer