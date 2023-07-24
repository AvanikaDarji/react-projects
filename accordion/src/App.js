import "./App.css";
import User from "./components/users.js";

function App() {
  const handleClick = () => {};

  return (
    <div className="App">
      <User />
      {/* <div className="img-container">
        <img src="/images/illustration-woman-online-mobile.svg" />
      </div> */}
      <div className="card">
        <div className="card-content">
          <h1> FAQ </h1>
          <div className="question-section">
            <div className="question">
              <p> How many team members can I invite ? </p>{" "}
              <i className="fas fa-chevron-up" onClick={handleClick}>
                {" "}
              </i>{" "}
            </div>{" "}
            <div className="answer">
              <p>
                You can invite up to 2 additional users on the Free plan.There
                is no limit on team members for the Premium plan.{" "}
              </p>{" "}
            </div>{" "}
            <div className="question">
              {" "}
              <p> What is the maximum file upload size ?</p>
              <i class="fas fa-chevron-up"> </i>
            </div>
            <div className="answer">
              <p>
                No more than 2 GB.All files in your account must fit your
                allotted storage space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
