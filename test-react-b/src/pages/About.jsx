// import {Link} from "react-router-dom";
import styles from "../css/styles.module.css";
export default function About(){
    return(
    <>
    <div className={styles.about}>
        <h1>Curlinary Aficionado</h1>
        <h3> Hi, I'm Nhi. This is a page coded by MERN stack.</h3>
        <p>Hope you enjoy it</p>
        <h3>Contact Me</h3>
        <address>
            <a href="mhathaonhin@gmail.com">hathaonhin@gmail.com</a><br />
            <a href="tel:4379880777">+1 (437) 988‑0777</a>
            </address>

    </div>
    </>
    );
}