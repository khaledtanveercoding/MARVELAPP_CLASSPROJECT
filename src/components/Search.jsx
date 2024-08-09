import "../styles/Search.scss";
import { useState } from "react";
import md5 from "md5";

export default function Search() {
        const [characterName, setCharacteName] = useState("");
        const [characterData, setCharacterData] = useState(null);
        const [comicData, setComicData] = useState(null);

        //const publicKey  = import.meta.env.VITE_PUBLIC_KEY;

        const publicKey  = "94a8ad0a28c0af8860d07136b5409602";
        const privateKey  = "c7825425d8ed3cb62e65f9752373e31c93bd86fd";
        //const privateKey  = import.meta.env.VITE_PRIVATE_KEY;


    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData();
    };

    const getCharacterData = () =>{
        setCharacterData(null);
        setComicData(null); //data will be removed with new data

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);
        const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setCharacterData(result.data);
                //console.log(result)
            })
            .catch((error) => {
                console.log("There was an error: ", error);
    });


    const generateHash = (timeStamp) => {
        return md5(timeStamp + privateKey + publicKey);
    }

    const handleChange= (event) => {
        setCharacteName(event.target.value);
    };

    const handleReset= () => {
        //To do implement later
    };


    return <>
    <form className="search" onSubmit={handleSubmit}>
        <input
            placeholder="ENTER CHARACTER NAME"
            type="text"
            onChange={handleChange}
        />
        <div className="buttons">
            <button type="submit">Get character data</button>
            <button type="reset" className="reset" onClick={handleReset}>Reset</button>
        </div>
    </form>
    </>;
}