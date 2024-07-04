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
          {section === "Inicio" && <Modal />}
          {section === "Sobre Mí" && <Description />}
          {section === "Intereses" && <Interests />}
          {section === "Contacto" && <FormContact />}
        </>
      ) : (
        <div style={{ display: "flex" }}>
          {denied ? <></> : <Modal close={true} />}
          <div>
            <Description />
            <Interests />
          </div>
          <div>
            <FormContact />
          </div>
        </div>
      )}
    </>
  );
}
