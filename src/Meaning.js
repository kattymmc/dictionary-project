import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <hr/>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div className="meaning-content" key={index}>
                        <div className="definition">{definition.definition}</div>
                        {definition.example &&
                        <ul className="example-list">
                            <li className="example">{definition.example}</li>
                        </ul>
                        }
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}
            {props.meaning.synonyms.length > 0 &&
                <div className="synonyms">
                    <h4>Synonyms</h4>
                    <hr />
                    <ul>
                    {props.meaning.synonyms.map(function (synonym, index) {
                        return (
                            <li key={index}>{synonym}</li>
                        );
                    })}
                    </ul>
                </div>
            }
            {props.meaning.antonyms.length > 0 &&
                <div className="antonyms">
                    <h4>Antonyms</h4> 
                    <hr />
                    <ul>
                    {props.meaning.antonyms.map(function (antonym, index) {
                        return (
                            <li key={index}>{antonym}</li>
                        );
                    })}
                    </ul>
                </div>
            }
        </div>
    );
}