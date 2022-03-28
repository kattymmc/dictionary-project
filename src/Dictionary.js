import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey="563492ad6f91700001000001384e26c6e96a4ed48bbfae025bfb9558";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }

    function load() {
        setLoaded(true);
        search();
    }
    
    if(loaded) {
        return(
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                    </form>
                    <div className="hint">
                        suggested words: sunset, wine, yoga, plant...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        )
    } else {
        load();
        return "Loading";
    }
}