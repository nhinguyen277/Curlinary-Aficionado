import styles from "../css/styles.module.css";
import{Link} from "react-router-dom";
export default function Post(props) {
    return(
        <Link to={`/post/${props.id}`} >
        <div id="recipe" className={styles.post} >
            <img className={styles.postImg} src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </div> 
        </Link>
    )
  }