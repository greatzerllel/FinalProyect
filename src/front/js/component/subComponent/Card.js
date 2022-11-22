import React from "react";
import { Link } from "react-router-dom";

const Card = ({post, index, cardClasses}) => {
  //caption
  return (
    <>

          <div className={cardClasses } key={index}>
            <div className="card">
              <div className="cardImg">
              <img
                src={post.imagen}
                className="card-img-top"
                alt="..."
              />
              </div>        
              <div className="card-body">
                <h5 className="card-title">$ {post.precio}</h5>
                <p className="card-text">{post.nombre}</p>
                <Link to={`/ProDetail/${post.id}`} className="btn btn-primary rounded-pill d-flex justify-content-center">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>

    </>
  );
};

export default Card;
