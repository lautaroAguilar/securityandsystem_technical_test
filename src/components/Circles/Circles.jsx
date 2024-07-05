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
  const circles = [
    {
      styles: {
        width: "200px",
        height: "200px",
        background:
          "linear-gradient(140deg, rgba(46,2,147,1) 0%, rgba(14,1,45,1) 70%)",
        borderRadius: "50%",
        position: "absolute",
        top: "55%",
        left: mobile ? "60%" : "80%",
        zIndex: "-10",
      },
    },
    {
      styles: {
        width: "250px",
        height: "250px",
        background:
          "linear-gradient(140deg, rgba(92,2,147,1) 0%, rgba(41,1,45,1) 70%)",
        borderRadius: "50%",
        position: "absolute",
        top: "45%",
        left: mobile ? "-10%" : "10%",
        zIndex: "-10",
      },
    },
    {
      styles: {
        width: "300px",
        height: "300px",
        background:
          "linear-gradient(140deg, rgba(255,209,239,1) 0%, rgba(101,0,203,1) 85%)",
        borderRadius: "50%",
        position: "absolute",
        top: "5%",
        left: mobile ? "30%" : "45%",
        zIndex: "-10",
      },
    },
    {
      styles: {
        width: "150px",
        height: "150px",
        background:
          " linear-gradient(140deg, rgba(108,78,173,0.5) 0%, rgba(27,0,54,1) 85%)",
        borderRadius: "50%",
        position: "absolute",
        top: "15%",
        left: "20%",
        zIndex: "-10",
        display: mobile ? "none" : "block",
      },
    },
    {
      styles: {
        width: "200px",
        height: "200px",
        background:
          "linear-gradient(140deg, rgba(81,0,255,1) 0%, rgba(42,20,64,1) 100%)",
        borderRadius: "50%",
        position: "absolute",
        top: "70%",
        left: "50%",
        zIndex: "-10",
        display: mobile ? "none" : "block",
      },
    },
  ];
  return (
    <>
      {circles.map((circle) => (
        <div style={circle.styles}></div>
      ))}
    </>
  );
}
