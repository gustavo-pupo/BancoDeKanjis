import React from "react";

export default function Card(props){
    return(
        <div onClick={() => props.deletar(props.id)} className="card">
            <h2 id="kanji">{props.ideograma}</h2>
            <p id="romaji">"{props.romaji}"</p>
            <p id="meaning">"{props.significado}"</p>
        </div>
    )
}