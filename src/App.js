import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="peony" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://transcendent-snickerdoodle-662c96.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Jacqueline Solorzano
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/jacquelinesz/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://keen-dango-78f283.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
