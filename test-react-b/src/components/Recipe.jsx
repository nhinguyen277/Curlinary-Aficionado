import styles from "../css/styles.module.css";
import{Link} from "react-router-dom";
export default function Recipe(props) {
    return(

    <Link to={`/details/${props.id}`} >
    <div id="recipe" className={styles.reArticle} >
        <img className={styles.recipeImg} src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
    </div> 
    </Link>
    )
  }