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
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/info"}>Info</NavLink>
              </li>
              <li>
                <NavLink to={"/prodotti"}>Prodotti</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
