import React, { useState } from "react";
import styles from "./FormContact.module.css";
export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    console.log(name, email, message);
  };
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

        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}
