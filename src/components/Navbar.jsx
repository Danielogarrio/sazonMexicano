import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [categorias, setCategorias] = useState([])


  useEffect(() => {
    fetch('https://5e1552e14e314335992aeeae7d8894b9.api.mockbin.io/')
            .then(res=>res.json())
            .then(json=>setCategorias(json))
  }, [])

  
  return (
    <nav>
        <Link to="/">
        <h1>EL BUEN SABOR</h1>
        </Link>
        <ul>
          {
            categorias.length > 0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`}>{e + " "}</Link>)
          }         
        </ul>
        <CartWidget />
    </nav>
    
    
  )
}

export default Navbar