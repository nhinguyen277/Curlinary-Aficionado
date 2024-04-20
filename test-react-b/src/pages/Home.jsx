// import {Link} from "react-router-dom";
import styles from "../css/styles.module.css";
import banner from "../img/soup.jpg";
import RecipeList from "../components/RecipeList";
import LastestList from "../components/LastestList";
import {Link} from "react-router-dom"
export default function Home(){
    return(
    <>
    <div className={styles.container}>
        <div className={styles.banner}>
            <div className={styles.leftSide}>
                <img className={styles.imgBanner} src={banner} alt="garlic soup"/>
                <div className={styles.titleBanner}>
                    <h2>Garlic Soup Italian style</h2>
                    <h5>with crispy croutons</h5>
                    <p>This soup really has to be served with croutons 
                        or a slice of bruschetta, plus some coarsely 
                        chopped parsley for that freshness. A simple soup 
                        with amazing flavor and fantastic if you have a cold!</p>
                </div>
            </div>           
            <div className={styles.rightSide}>
                <h1>Recipes for your wonderful day</h1>
                <h5>Cooking and decorating is one of the most effective 
                    ways to relieve stress, tie your hair up, wear an apron 
                    and create great dishes with Curlinary Aficionado</h5>
                <div className={styles.category}>
                    <h3><Link to={`/posts`}>The Lastest Posts</Link></h3>
                    <div className={styles.categories}>
                    <LastestList/>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div id="recipePart" >
        <h1 className={styles.recipePart}>Explore Rescipes</h1>
        <div id="recipes" className={styles.recipes}>
        <RecipeList/>
        </div>
    </div>
    </>
    );
}