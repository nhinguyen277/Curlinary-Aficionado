import {NavLink} from "react-router-dom";
import styles from "../css/styles.module.css";
export default function Nav(){
    return(
        <nav id="main-menu" className={styles.nav} aria-label="Main navigation">

            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/recipes">Recipes</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>

        
    )
}