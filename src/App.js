import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchData} from './actions';
import './App.css';
const App = ()=> {
  const quotes = useSelector(state=>state.quotes);
  const [randomQuote,setRandomQuote] = useState({});
  const dispatch = useDispatch();
  const getRandomQuote=()=> {
   setRandomQuote(quotes[0][Math.floor(Math.random() * quotes[0].length)]);
 }
 const changeColor=()=>{
  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  let index = Math.floor(Math.random() * colors.length);
  document.body.style = "background:" + colors[index];
  return colors[index];
 }

useEffect(()=>{
  dispatch(fetchData());
},[]);
    const color = changeColor();
    return (
      <div id = "quote-box">
      <p className = "quote-text" id = "text">{randomQuote.quote}</p>
      <p className = "quote-author" id = "author">- {randomQuote.author}</p>
      <button style = {{backgroundColor : color}} className = "button" id = "new-quote" onClick = {getRandomQuote}>New Quote</button>
      <a id = "tweet-quote" style = {{color : color}} target="_blank" href = {'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
      +encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author)}>Tweet this quote!</a>
      </div>
    );
}
export default App;
