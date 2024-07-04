"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useAppContext } from "@/context/AppContext";
function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const { updateState } = useAppContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const handleChangeSection = (newState) => {
    updateState(newState);
    console.log(newState);
  };
  useEffect(() => {
    /* para conocer el ancho de la pantalla y mostrar un menú u otro */
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      {isMobile ? (
        <div className={styles.container_hamburguer}>
          <div
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            &#9776;
          </div>
          <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
            <li>
              <p
                onClick={() => {
                  handleChangeSection("Inicio");
                  handleLinkClick();
                }}
              >
                Inicio
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleChangeSection("Sobre Mí");
                  handleLinkClick();
                }}
              >
                Sobre Mí
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleChangeSection("Intereses");
                  handleLinkClick();
                }}
              >
                Intereses
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  handleChangeSection("Contacto");
                  handleLinkClick();
                }}
              >
                Contacto
              </p>
            </li>
          </ul>
        </div>
      ) : (
        <ul className={styles.navLinks}>
          <li>
            <p>Inicio</p>
          </li>
          <li>
            <p>Sobre Mí</p>
          </li>
          <li>
            <p>Intereses</p>
          </li>
          <li>
            <p>Contacto</p>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
