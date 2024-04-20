import styles from "../css/styles.module.css";
import PostList from "../components/PostList";

export default function Posts(){
    return(
    <>
     <div className={styles.recontainer}>
        <div id="postPart" >
            <h1 className={styles.recipePart}>Posts</h1>
            <div id="postDetail" className={styles.posts}>
            <PostList/>
            </div>
            
        </div>
    </div>
    </>
    )
}