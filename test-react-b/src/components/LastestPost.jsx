import styles from "../css/styles.module.css";
export default function Lastest(props) {
    return(
        
        <div className={styles.article}>
            <img className={styles.imgCategory} src={props.image} alt={props.name}/>
            {/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fdayyanigroup.com%2FCooking-Stuff-Hand-Drawn-Sketch-Set-Collection-Funny-Stock-340-78469.html&psig=AOvVaw3XQfK3gW05oUPYTUcs5hNG&ust=1713498482544000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLig57TtyoUDFQAAAAAdAAAAABAK */}
            <h5>{props.name}</h5>
            <p>{props.content}</p>
        </div>
  
    )
  }