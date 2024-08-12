import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) => {

    const {id, image, title, description, category, rating, price} = producto


  return (
    <div className='prod-card'>
    <h3>{title}</h3>
    <img src={image} alt={`foto del producto ${title}`} height={250} width={250}/>
    <p>{description}</p>
    <p>{price}</p>
    <button onClick={mostrarAnterior}>Anterior</button>
    <button onClick={mostrarSiguiente}>Siguiente</button>
    <ItemCount id={id}/>

  </div>
  )
}

export default ItemDetail