import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const ActiveMode = () => {
    return (console.log("ciao"))
  }
  return (
    <header className='m-3'>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <div>
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
            <div>
              <button className='btn btn-success' onClick={ActiveMode} >Modalità Budget</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
