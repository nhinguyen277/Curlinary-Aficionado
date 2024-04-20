import {useState, useEffect} from "react";
import styles from "../css/styles.module.css";
import { useParams } from "react-router-dom";

export default function DetailRecipe() {
    const value = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      let response = await fetch(`http://localhost:3000/api/post/${value.id}`);
      let data = await response.json();
      setDetail(data);
    }
    console.log("param:"+value.id);
    getDetail(value.id);
  },[]);

  return (
      <div className={styles.recontainer}>
          <div id="detail" className={styles.detail}>
            <h1>{detail.name}</h1>
              <img className={styles.imgPost} src={detail.image} alt={detail.name}/>            
            <div id="information" className={styles.information2}>
            <p>{detail.content}</p>
            </div>
          </div>
      </div>
  );
}