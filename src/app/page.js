import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/Section/Section";
export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Navbar />
        <div className={styles.brand}>Lautaro Aguilar</div>
      </header>
      <section>
        <Section />
      </section>
    </main>
  );
}
