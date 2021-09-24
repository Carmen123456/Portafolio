
import Navbar from "../../Components/navbar/Navbar";

import './Error404.css'

function Error404() {
    return (
      <div>
       
        <Navbar />

        <div className="contenedor">
          <div>
            <img src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif" class="card-img-top my-2" alt="404"/>
            <div>
              <h1>No se encuentra la paginaaaaaa :(</h1>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Buscando...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
  export default Error404;