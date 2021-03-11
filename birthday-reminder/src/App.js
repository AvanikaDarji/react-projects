import {useState} from "react";
import './App.css';
import data from "./data";
import List from "./list";


function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
    <main className="App">
     <section className="container">
             <h3> {people.length} birthdays today </h3>
           <List people={people}/>
          
             <button onClick={()=>{setPeople([])}}className="btn">Clear all</button>
      </section>
    </main>
    </div>
  );
}

export default App;
