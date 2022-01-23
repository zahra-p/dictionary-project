import logo from './logo2.png';
import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>

        <footer className="App-footer">
          <small>
              Coded by Zahra Adelinia and is <a href="https://github.com/zahra-p/dictionary-project" 
              target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a> and 
              <a href="https://wonderful-sammet-14c71a.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}


