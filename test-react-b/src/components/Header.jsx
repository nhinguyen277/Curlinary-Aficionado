import Nav from "./Nav";
import styles from "../css/styles.module.css";
import logo from "../img/logo.png";
import menu from "../img/frame.png";
import {Link} from "react-router-dom";
export default function Header() {
  //The return statement below returns a JSX element (one root element but you can have others inside the root element).
  return(
    <header id="header" className={styles.headContainer}>
      {/* This is JSX. */}
      <a href="/"><img src={logo} className={styles.logo} alt="logo"/></a>
      <h1 id="site-name" className={styles.siteName}><a href="/">Curlinary Aficionado</a></h1>
    <Nav />
      <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
          <img src={menu} alt="menu"/>
          </button>
          <div className={styles.dropdownContent}>
          <ul>
              <li> <Link to="/">Home</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          </div>
        </div>
    </header>
  );
}