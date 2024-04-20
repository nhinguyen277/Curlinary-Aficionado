import {useState, useEffect} from "react";
import styles from "../css/styles.module.css";
import { useParams } from "react-router-dom";

export default function DetailRecipe() {
    const value = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      let response = await fetch(`http://localhost:3000/api/details/${value.id}`);
      let data = await response.json();
      setDetail(data);
    }
    // console.log("param:"+value.id);
    getDetail(value.id);
  },[]);

  return (
      <div className={styles.recontainer}>
          <div id="detail" className={styles.detail}>
            <h1>{detail.name}</h1>
              <h3>{detail.subtitle}</h3>
            <div id="upContent" className={styles.content}>
              <img className={styles.imgDetail} src={detail.image} alt={detail.name}/>
              <div id="ingredients" className={styles.ingredient}>
                <h2>Ingredients</h2>
                <h4>{detail.ingredients}</h4>
              </div>
            </div>
            <div id="information" className={styles.information}>
            <p>{detail.description}</p>
            <h2>Instruction</h2>
                <p>{detail.instruction}</p>
            </div>

          </div>
      </div>
  );
}