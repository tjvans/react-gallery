import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <>
      <a id="github-link" href="https://github.com/tjvans/react-gallery">
        <span>Project files on </span>
        <img src='./github-mark.svg' alt="The GitHub logo"/>
      </a>
      <Gallery />
    </>
  );
}

export default App;
