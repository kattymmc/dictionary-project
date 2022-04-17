import './App.css';
import logo from "./bg-cat.png";
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"/>
          <h1 className="shadow-stroke stroke">Dictionary</h1>
        </header>
      </div>
      <main><Dictionary defaultKeyword="play"/></main>
      <footer className="App-footer">
        <small>
          Created by <a href="https://admiring-bell-9722e5.netlify.app/"
              alt="Katherine Miraval"
              target="_blank"
              rel="noreferrer"
          >Katherine Miraval</a>. It's <a
              href="https://github.com/kattymmc/dictionary-project"
              alt="GitHub"
              target="_blank"
              rel="noreferrer"
            >Open-sourced on GitHub
          </a> and hosted on Netlify
        </small>
      </footer>
    </div>
  );
}
