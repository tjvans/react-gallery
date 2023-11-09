import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <a id="github-link" href="https://github.com/tjvans/react-gallery">
        <span>Project files on </span>
        <img src="../public/github-mark.svg" alt="The GitHub logo" />
      </a>
      <Gallery />
    </>
  );
}

export default App;
