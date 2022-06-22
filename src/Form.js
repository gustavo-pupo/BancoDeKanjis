import React from "react";

export default function Form(){
    return(
        <form className="form">
            <input
                type="text" 
                className="kanjiInput"
                placeholder="Kanji"
            />
            <input
                type="text" 
                className="romajiInput"
                placeholder="Romaji"
            />
            <input
                type="text" 
                className="significadoInput"
                placeholder="Significado"
            />
            <button className="addKanji">Adicionar Kanji</button>
            <input
                type="text"
                className="pesquisa"
                placeholder="Pesquisar"
            />
        </form>
    )
}