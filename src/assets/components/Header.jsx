import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className='list-unstyled d-flex'>
              <li>
                <NavLink to={"/"} className="nav">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/info"} className="nav" >Info</NavLink>
              </li>
              <li>
                <NavLink to={"/prodotti"} className="nav" >Prodotti</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
