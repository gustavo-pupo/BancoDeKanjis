import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Card from './Card';
import Banco  from './banco';

function App() {
  const [cards, setCards] = React.useState([])

  const [contador1, setContador1] = React.useState(false)
  const [contador2, setContador2] = React.useState(false)

  const cardElements = cards.map(card => {
    return(
    <Card 
        key={card.id}
        id={card.id}
        ideograma={card.ideograma}
        romaji={card.romaji}
        significado={card.significado}
        deletar={deletar}
    />
    )
})

  React.useEffect(function getKanjis(){
    fetch(`http://localhost:3001/kanjis`)
      .then(res => res.json())
      .then(data => setCards(data))
  }, [contador1, contador2])

  function handleSubmit(event , formData){
    event.preventDefault()
    fetch("http://localhost:3001/kanjis", 
    {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    setContador1(prevContador1 => !prevContador1)
  }

  // console.log(cards)

  function deletar(id){
    fetch(`http://localhost:3001/kanjis/${id}`,
      {
        method: "DELETE"
      }
    )
    setContador2(prevContador2 => !prevContador2)
  }

  return (
    <main>
      <Header kanjis={cards}/>
      <Form handleSubmit={handleSubmit}/>
      <Banco
        cardElements={cardElements}
      />
    </main>
  )
}

export default App;
