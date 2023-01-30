import Link from "next/link";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <div className={styles.topnav}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/dog_list">Dog List</Link>
      </div>
      <div>
        <Link href="/map">Map</Link>
      </div>
    </div>
  );
}

export default Header;
