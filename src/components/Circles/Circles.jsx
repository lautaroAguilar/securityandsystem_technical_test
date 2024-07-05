"use client";
import React, { useEffect, useState } from "react";

export default function Circles() {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 0.3); // Hacer la animación más lenta
    }, 20); // Aumentar el intervalo para que sea más lenta

    return () => clearInterval(interval);
  }, []);

  const circles = [
    {
      styles: {
        width: "150px", // Reducir el tamaño de la circunferencia
        height: "150px", // Reducir el tamaño de la circunferencia
        background:
          "linear-gradient(140deg, rgba(46,2,147,1) 0%, rgba(14,1,45,1) 70%)",
        borderRadius: "50%",
        position: "absolute",
        top: `${50 + 15 * Math.sin((angle * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        left: `${50 + 15 * Math.cos((angle * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        zIndex: "-10",
      },
    },
    {
      styles: {
        width: "200px", // Reducir el tamaño de la circunferencia
        height: "200px", // Reducir el tamaño de la circunferencia
        background:
          "linear-gradient(140deg, rgba(92,2,147,1) 0%, rgba(41,1,45,1) 70%)",
        borderRadius: "50%",
        position: "absolute",
        top: `${40 + 15 * Math.sin(((angle + 120) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        left: `${50 + 15 * Math.cos(((angle + 120) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        zIndex: "-10",
      },
    },
    {
      styles: {
        width: "250px", // Reducir el tamaño de la circunferencia
        height: "250px", // Reducir el tamaño de la circunferencia
        background:
          "linear-gradient(140deg, rgba(255,209,239,1) 0%, rgba(101,0,203,1) 85%)",
        borderRadius: "50%",
        position: "absolute",
        top: `${10 + 15 * Math.sin(((angle + 240) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        left: `${50 + 15 * Math.cos(((angle + 240) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        zIndex: "-10",
      },
    },
    {
      styles: {
        width: "100px", // Reducir el tamaño de la circunferencia
        height: "100px", // Reducir el tamaño de la circunferencia
        background:
          " linear-gradient(140deg, rgba(108,78,173,0.5) 0%, rgba(27,0,54,1) 85%)",
        borderRadius: "50%",
        position: "absolute",
        top: `${20 + 15 * Math.sin(((angle + 60) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        left: `${20 + 15 * Math.cos(((angle + 60) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        zIndex: "-10",
        display: mobile ? "none" : "block",
      },
    },
    {
      styles: {
        width: "150px", // Reducir el tamaño de la circunferencia
        height: "150px", // Reducir el tamaño de la circunferencia
        background:
          "linear-gradient(140deg, rgba(81,0,255,1) 0%, rgba(42,20,64,1) 100%)",
        borderRadius: "50%",
        position: "absolute",
        top: `${70 + 15 * Math.sin(((angle + 180) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        left: `${50 + 15 * Math.cos(((angle + 180) * Math.PI) / 180)}%`, // Reducir la distancia recorrida
        zIndex: "-10",
        display: mobile ? "none" : "block",
      },
    },
  ];
  return (
    <>
      {circles.map((circle, index) => (
        <div key={index} style={circle.styles}></div>
      ))}
    </>
  );
}
