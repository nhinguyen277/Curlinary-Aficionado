import {useState, useEffect} from "react";

export default function UselessFact(){
    const [randomFact,setRandomFact]= useState("");
    const [factSource, setFactSource] = useState("");

    useEffect(()=>{
        const getFact = async () => {
            let response = await fetch(
                "https://uselessfacts.jsph.pl/api/v2/facts/random",
                {method:"get"}
            );
            let data =  await response.json();
            setRandomFact(data.text);
            setFactSource(data.source);
        }
        getFact();
    },[]); // the empty square brackets are saying that there are no defendencies for this effect (without it the effect will keep running until it errors out)
    
    let source = factSource ? `(${factSource})` : "";
    return(
        <div>
            <h2>Here's your random fact</h2>
            <p>{randomFact} {source}</p>
        </div>
    )
}