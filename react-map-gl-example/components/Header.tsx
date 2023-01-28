import Link from "next/link";
import styles from "@/styles/Header.module.css";

// const Header = () => {
//   return (
//     <header>
//       <nav className={styles.topnav}>
//         <Link href="/">
//           <a>Home</a>
//         </Link>
//       </nav>
//     </header>
//   );
// };

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
