import React from "react";
import styles from "./Interests.module.css";
export default function Intereses() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <div>
          <li>Seguridad</li>
          <li>Tecnología</li>
          <li>Programación</li>
          <li>Cine</li>
          <li>Deportes</li>
        </div>
        <div>
          <li>Cocina</li>
          <li>Viajar</li>
          <li>Música</li>
          <li>Naturaleza</li>
          <li>Sistemas</li>
        </div>
      </ul>
    </div>
  );
}
