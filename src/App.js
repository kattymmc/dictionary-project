import './App.css';
import logo from "./logo.png";
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"/>
        </header>
      </div>
      <main><Dictionary /></main>
      <footer className="App-footer">
        <small>
          Coded by Katherine Miraval, <a
              href="https://github.com/kattymmc/dictionary-project"
              alt="GitHub"
              target="_blank"
              rel="noreferrer"
            >Open-source code
          </a>
        </small>
      </footer>
    </div>
  );
}
