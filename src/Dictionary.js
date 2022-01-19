import axios from "axios";
import React,{useState} from "react";
import Results from "./Results.js";
import "./Dictionary.css";


export  default function Dictionary(props){
    let [keyword, setKeyword] =useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]= useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(){
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
                    
                </div>
            );
    }else{
        load();
        return "Loading";
    }
    
}