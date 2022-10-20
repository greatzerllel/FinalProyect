import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      {/* <div className='col-md-2 bg-white'>sideBar</div> */}
      <div className="sidebar">
        <ul>
          <li>
            <Link to="">Productos publicados</Link>
          </li>
          <li>
            <Link to="">Pedidos</Link>
          </li>
          <li>
            <Link to="">AHistorial</Link>
          </li>
          <li>
            <Link to="">Administrar cuentas</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
