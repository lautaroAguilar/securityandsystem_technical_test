"use client";
import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Modal from "../Modal/Modal";
import Description from "../Description/Description";
import Interests from "../Interests/Interests";
import FormContact from "../FormContact/FormContact";
import { useAppContext } from "@/context/AppContext";

export default function Section() {
  const { section, denied } = useAppContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          {/* diferentes secciones en mobile */}
          {section === "Inicio" && <Modal />}
          {section === "Sobre Mí" && <Description />}
          {section === "Intereses" && <Interests />}
          {section === "Contacto" && <FormContact />}
        </>
      ) : (
        <div className={styles.containerDesktop}>
          {/* simulación de Modal en desktop */}
          {denied ? (
            <></>
          ) : (
            <Modal
              close={true}
              style={{
                width: "400px",
                height: "300px",
                background: "#6b4dac",
                padding: "2rem",
                borderRadius: "1rem",
                position: "absolute",
                top: "calc(50% - 200px)",
                left: "calc(50% - 200px)",
                zIndex: 40,
              }}
            />
          )}
          <div className={styles.containerDesktop_sections}>
            <div className={styles.firstContainer}>
              <Description />
              <Interests />
            </div>
            <div className={styles.secondContainer}>
              <FormContact />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
