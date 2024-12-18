import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ quote: data.content, author: data.author });
    };

    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ quote: data.content, author: data.author });
    };

    await fetchQuote();
  };

  const tweetQuote = () => {
    const encodedQuote = encodeURIComponent(quote.quote);
    window.open(`https://twitter.com/intent/tweet?text=${encodedQuote}`);
  };

  return (
    <div id="quote-box" className="container">
      <p id="text">{quote.quote}</p>
      <p id="author">{`- ${quote.author}`}</p>
      <div id="button-container">
        <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
        <a id="tweet-quote" href="#" target="_blank" onClick={tweetQuote}>
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
