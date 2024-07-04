import { useAppContext } from "@/context/AppContext";
import React from "react";

export default function Modal({ close }) {
  const { handleDenied } = useAppContext();

  const handleClick = () => {
    handleDenied();
  };
  return (
    <div>
      {close ? <p onClick={handleClick}>X</p> : ""}
      <h2>Prueba técnica para Security and System.</h2>
      <p>
        Como parte de la pruea técnica se creó una maqueta de un perfil de
        usuario, incluyendo información básica, una lista de intereses y una
        sección de contacto.
      </p>
    </div>
  );
}
