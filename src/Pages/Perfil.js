import React from "react";

import Header from "../Components/Header";

export default function Perfil() {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column">
        <figure className="justify-content-center">
          <div className="d-flex rounded-circle justify-content-center">
              <img src={require('../Images/perfil-n.PNG')} alt="Perfil" style="" />
          </div>
          <figcaption className="text-center">Editar foto de perfil</figcaption>
        </figure>
        <button
          type="button"
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Favoritos
        </button>
        <button
          type="button"
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Dirección
        </button>
        <button
          type="button"
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Telefono
        </button>
        <button
          type="button"
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Cupones
        </button>
        <button
          type="button"
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Más Comprados
        </button>
        <button
          type="button"
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 mb-3 justify-content-center"
        >
          Recibos de Compra
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg w-75 d-flex text-center mx-auto mb-4 justify-content-center"
        >
          CERRAR SESION
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg w-75 d-flex mx-auto my-1 justify-content-center"
        >
          A COMPRAR!
        </button>
      </div>
    </div>
  );
}
