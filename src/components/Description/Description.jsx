import React from "react";
import styles from "./Description.module.css";
export default function Description() {
  return (
    <div className={styles.container}>
      <p>
        Hola, mi nombre es Lautaro. Tengo 22 años, vivo en Buenos Aires,
        Argentina.
      </p>
      <p>
        Actualmente me encuentro en la búsqueda de nuevos desafíos que me
        permitan seguir creciendo como Desarrollador Frontend.
      </p>
      <p>Me encantaría avanzar en el proceso y crear soluciones juntos.</p>
    </div>
  );
}
