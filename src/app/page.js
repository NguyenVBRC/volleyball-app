import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.bannerContainer}>Banner</h1>
      <div className={styles.homepage_links}>
        <Link id={styles.linkCards} href="/tournaments">All Tournaments</Link>
        <Link id={styles.linkCards} href="/leagues">All Leagues</Link>
      </div>
    </div>
  );
}
