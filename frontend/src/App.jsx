import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="title">Anjita Learning Backend</h1>
      <p className="subtitle">Enjoy These Coding Jokes: {jokes.length}</p>

      <div className="jokes-container">
        {jokes.map((joke) => (
          <div key={joke.id} className="joke-card">
            <h3 className="joke-title">{joke.title}</h3>
            <p className="joke-content">{joke.content}</p>
            <button className="laugh-button">😂 Laugh</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
