import Image from "next/image";
import userImage from "../../public/userImage.jpg";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/Section/Section";
import Circles from "@/components/Circles/Circles";
export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Navbar />
        <div className={styles.user_info}>
          <h4>Lautaro Aguilar</h4>
          <Image
            src={userImage}
            alt="Imagen de usuario"
            style={{ height: "auto", width: "30px", borderRadius: "50%"}}
          />
        </div>
      </header>
      <section className={styles.section}>
        <Section />
      </section>
      <Circles />
    </main>
  );
}
