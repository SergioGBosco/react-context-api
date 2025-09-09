import React, { use } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useBudgetMode } from '../contexts/BudgetContext'


const ProdottiPage = () => {
  const { budgetMode, setBudgetMode } = useBudgetMode();
  const [prodotti, setProdotti] = useState([]);
  const [showLowPrice, setShowLowPrice] = useState(prodotti)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setShowLowPrice(resp.data)
    })

    const lowPrice = prodotti.filter((prod) => {
      prod.price <= 30
      { budgetMode ? setShowLowPrice() : setShowLowPrice() }
    }
    )
    console.log(showLowPrice)
    console.log(budgetMode)
  }, [budgetMode]);

  return (
    <div className="container">
      <div className="row">

        {showLowPrice.map((prod) => {
          return (
            <div className="col-12 col-md-6 col-lg-3" key={prod.id}>
              <div className="card" >
                <Link to={`/prodotti/${prod.id}`} className='card-product'>
                  <img src={prod.image} className="card-img-top" alt={prod.title} />
                  <div className="card-body">
                    <p className="card-text">{prod.price}.</p>
                    <p className="card-text">{prod.title}.</p>
                    <p className="card-text">{prod.category}.</p>
                    <p className="card-text">{prod.description}.</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        })};

      </div>
    </div >
  )
}

export default ProdottiPage
