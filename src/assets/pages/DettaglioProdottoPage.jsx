import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
const DettaglioProdottoPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(resp => {
      setDetails(resp.data)
    })
  }, [id]);

  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">

              <div className="card card-detail" >
                <img src={details.image} className="card-img-top" alt={details.title} />
                <div className="card-body">
                  <p className="card-text">{details.price}.</p>
                  <p className="card-text">{details.title}.</p>
                  <p className="card-text">{details.category}.</p>
                  <p className="card-text">{details.description}.</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex m-4 justify-content-around">
                <button className="btn btn-primary" onClick={() => navigate(`/prodotti/${parseInt(id) - 1}`)}> torna alla pagina precedente </button>
                <button className="btn btn-success" onClick={() => navigate(`/prodotti/${parseInt(id) + 1}`)}> Vai Alla pagina Successiva </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DettaglioProdottoPage
