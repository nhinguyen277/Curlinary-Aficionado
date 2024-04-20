import styles from "../css/styles.module.css";
import RecipeList from "../components/RecipeList";

export default function Recipe(){
    return(
    <>
     <div className={styles.recontainer}>
        <div id="recipePart" >
            <h1 className={styles.recipePart}>Explore Rescipes</h1>
            <div id="recipes" className={styles.recipesP}>
            <RecipeList/>
            </div>
        </div>
    </div>
    </>
    )
}