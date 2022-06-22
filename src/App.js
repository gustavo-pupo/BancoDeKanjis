import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Card from './Card';

function App() {

  return (
    <main>
      <Header />
      <Form />
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default App;
