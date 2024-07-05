import React, { useState, useEffect } from "react";
import styles from "./FormContact.module.css";
import Tooltip from "../Tooltip/Tooltip";

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageTooltip, setMessageTooltip] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [backgroundTooltip, setBackgroundTooltip] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setShowTooltip(true);
      setMessageTooltip("MENSAJE ENVIADO");
      setBackgroundTooltip("#00a800");
    } else {
      setShowTooltip(true);
      setMessageTooltip("COMPLETA LOS CAMPOS");
      setBackgroundTooltip("#bd1212");
    }
  };

  useEffect(() => {
    let timeout;
    if (showTooltip) {
      timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showTooltip]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContact}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">NOMBRE:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message">MENSAJE:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChangeMessage}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
      {showTooltip && (
        <Tooltip text={messageTooltip} backgroundColor={backgroundTooltip} />
      )}
    </div>
  );
}
