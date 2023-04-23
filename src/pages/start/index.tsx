import Link from "next/link";
import styles from "./start.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const arr = [
  {
    name: "Characters",
    img: "/assets/characters.jpg",
    link: "/characters",
  },
  {
    name: "secoinde",
    img: "/assets/characters.jpg",
    link: "/characters",
  },
  {
    name: "thirsd",
    img: "/assets/characters.jpg",
    link: "/characters",
  },
];

export default function Start() {
  return (
    <div className={styles.container}>
      <Link href="/characters" className={styles.linkCard}>
        <h2 className={montserrat.className}>Characters</h2>
        <img
          className={styles.levitateRnm}
          src="/assets/characters.png"
          alt=""
        />
      </Link>
      <Link href="/locations" className={styles.linkCard}>
        <h2 className={montserrat.className}>Locations</h2>
        <img src="/assets/beth.png" alt="" className={styles.beth} />
      </Link>
      <Link href="/episodes" className={styles.linkCard}>
        <h2 className={montserrat.className}>Episodes</h2>
        <img className={styles.beth} src="/assets/summer.webp" alt="" />
      </Link>
    </div>
  );
}
