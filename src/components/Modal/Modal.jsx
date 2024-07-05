import React from "react";
import styles from "./Modal.module.css";
import { useAppContext } from "@/context/AppContext";
import { IoClose } from "react-icons/io5";
export default function Modal({ close, style }) {
  const { handleDenied } = useAppContext();

  const handleClick = () => {
    handleDenied();
  };
  return (
    <div className={styles.modal} style={style}>
      {close ? (
        <IoClose
          onClick={handleClick}
          style={{
            position: "absolute",
            top: " 1rem",
            right: " 16px",
            color: "#F5F5F5",
            fontSize: " 2rem",
          }}
        />
      ) : (
        ""
      )}
      <h2>Prueba técnica para Security and System.</h2>
      <div className={styles.containerTexts}>
        <p>
          Como parte de la prueba técnica se creó una maqueta de un perfil de
          usuario, incluyendo información básica, una lista de intereses y una
          sección de contacto.
        </p>
        {close ? (
          <></>
        ) : (
          <p>Desde el menú de navegación podés ver las otras secciones.</p>
        )}
      </div>
    </div>
  );
}
