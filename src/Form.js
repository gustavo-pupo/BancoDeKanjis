import React from "react";

export default function Form(props){
    
    const [formData, setFormData] = React.useState(
        {ideograma:"", romaji:"", significado:""}
    )

    function handleChange(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    return(
        <form 
        className="form"
        onSubmit={event => props.handleSubmit(event, formData, setFormData)}
        >
            <input
                type="text" 
                className="kanjiInput"
                onChange={handleChange}
                placeholder="Kanji"
                name="ideograma"
                value={formData.ideograma}
            />
            <input
                type="text" 
                className="romajiInput"
                onChange={handleChange}
                placeholder="Romaji"
                name="romaji"
                value={formData.romaji}
            />
            <input
                type="text" 
                className="significadoInput"
                onChange={handleChange}
                placeholder="Significado"
                name="significado"
                value={formData.significado}
            />
            <button className="addKanji">Adicionar Kanji</button>
        </form>
    )
}