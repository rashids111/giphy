import React, { useState } from "react"

import './App.css';
import GifBody from './components/GIFBody';
import getGifs from './services/giphy-api'

function App() {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState("")

  function searchGifs() {
    //console.log(search)
    getGifs(search).then(response => setGifs(response))
  }

  return (
    <div className="App">
      <input type="text" placeholder="Search for gifs here" value={search} name="value1" onChange={e => setSearch(e.target.value)} />
      <button onClick={() => searchGifs()}> Search </button>
      <GifBody gifs={gifs} />
    </div>
  );
}

export default App;
