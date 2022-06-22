import React from "react";
import japanFlag from './japaneseFlag.png'

export default function Header(props) {
    return(
        <header className="header">
            <img className="japao" src={japanFlag} alt="" />
            <h1 className="titulo">Banco de Kanjis</h1>
            <p className="qtdKanjis">Kanjis Descobertos: 100</p>
        </header>
    )
}