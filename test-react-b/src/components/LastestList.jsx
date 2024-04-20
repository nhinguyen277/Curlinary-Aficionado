import {useState, useEffect} from "react";
import LastestPost from "./LastestPost";

export default function LatestList() {
  const [lastests, setLastest] = useState([]);

  useEffect(() => {
    const getLastest = async () => {
      let response = await fetch("http://localhost:3000/api/lastest");
      let data = await response.json();
      setLastest(data);
    }
    getLastest();
  }, []);

  return (
    
      lastests.map((lastest) => (

        <LastestPost
        key={lastest.image + lastest.name + lastest.content + lastest.posted_at}
        image={lastest.image}
        name ={lastest.name}
        content={lastest.content}
        posted={lastest.posted_at}
        />
      ))         
    
  );
}