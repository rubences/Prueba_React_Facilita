import React from 'react';
import './App.css';

function App() {
  console.log('This is a console log statement');
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {getReactLink()}
        {getFernandoLink()}
        {getHackerRankLink()}
      </header>
    </div>
  );
}

function getReactLink() {
  return (
    <p className="small">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </p>
  )
}

function getFernandoLink() {
  return (
    <p className="small">
      <a
        className="App-link"
        href="https://www.fernandoalonso.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fernando Alonso
      </a>
    </p>
  )
}

function getHackerRankLink() {
  return (
    <p className="small">
      <a
        className="App-link"
        href="https://www.hackerrank.com/dashboard?h_r=logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        HackerRank

        HackerRank
      </a>
    </p>
  )
}

export default App;
