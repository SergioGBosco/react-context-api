import React, { use } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProdottiPage = () => {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProdotti(resp.data);
      console.log(prodotti)
    })
  }, []);


  return (
    <div className="container">
      <div className="row">

        {prodotti.map((prod) => {
          return (
            <div className="col-3" key={prod.id}>
              <Link to={`/prodotti/${prod.id}`}>
                <div className="card" >
                  <img src={prod.image} className="card-img-top" alt={prod.title} />
                  <div className="card-body">
                    <p className="card-text">{prod.price}.</p>
                    <p className="card-text">{prod.title}.</p>
                    <p className="card-text">{prod.category}.</p>
                    <p className="card-text">{prod.description}.</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })};

      </div>
    </div >
  )
}

export default ProdottiPage
