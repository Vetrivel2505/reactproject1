import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('#eee');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .then(data => setAuthor(data.author))
  }, [])

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
        setBgColor(getRandomColor());
      });
  }

  const getRandomColor = () => {
    const colors = ['#008CBA', '#5cb85c', '#d9534f', '#f0ad4e','#55D502','#7CE3DB ','#6880D3 ','#3BC2B2 ','#E58AA9 '];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
    <Header/>
    <div className="quote-container">
      <div className='quotes'>
        <p className="quote">{quote}</p>
        <p className='author'>~{author}</p>
        <button className="new-quote-button" onClick={getNewQuote}>New Quote</button>
        <a  href={`https://twitter.com/intent/tweet?text=${quote}-${author}`} target="-blank" classname="Twi"rel="noopener noreferrer" >Twitter </a>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
export default App;