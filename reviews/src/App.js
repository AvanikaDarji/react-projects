import logo from "./logo.svg";
import "./App.css";
import Review from "./review";
import { FaGithubSquare } from "react-icons/fa";

function App() {
  return (
    <main>
      <section className="container">
        <h1> Reviews </h1>
        <div className="underline"> </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
