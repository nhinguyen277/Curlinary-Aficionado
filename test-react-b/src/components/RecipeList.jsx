import {useState, useEffect} from "react";
import styles from "../css/styles.module.css";
import Recipe from "./Recipe";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let response = await fetch("http://localhost:3000/api/recipes");
      let data = await response.json();
      setRecipes(data);
    }
    getRecipes();
  }, []);

  return (
          recipes.map((recipe) => (

            <Recipe
            key={recipe._id + recipe.image + recipe.name + recipe.description}
            id={recipe._id}
            image={recipe.image}
            name ={recipe.name}
            description={recipe.description}
            />
          ))         
  );
}