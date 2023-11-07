import { useState } from 'react';
import './App.css';
import Kanye from './Kanye';

function App() {
  const title = 'Kanye Quotes';
  const url = 'https://api.kanye.rest/';
  const [quote, setQuote] = useState("")

  async function results() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    setQuote(jsonResponse.quote);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <Kanye search={results}/>
        <h2> {quote} </h2>
      </div>
    </div>
  );
}

export default App;
