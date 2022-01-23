import axios from "axios";
import React,{useState} from "react";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";


export  default function Dictionary(props){
    let [keyword, setKeyword] =useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]= useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey="563492ad6f91700001000001bb742491a94f4e7592162743fcc74e69";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();   
        search();
    }

    function load(){
        setLoaded(true);
        search();
    }
    
    function handlekeywordchange(event){
        setKeyword(event.target.value);
    }

    if(loaded){
        return (
                <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" autoFocus={true} onChange={handlekeywordchange}  defaultValue={props.defaultKeyword}/>

                    </form>
                    <div className="hint">
                        suggested words: sunset, wine, yoga, plant...
                    </div>
                </section>  
                    <Results results={results} />
                    <Photos photos={photos} />
                    
                </div>
            );
    }else{
        load();
        return "Loading";
    }
    
}