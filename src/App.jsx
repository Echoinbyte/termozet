import "./App.css";
import Prompt from "./components/Prompt";

function App() {
  return (
    <>
      <div className="screen unblank">
        <div className="navbar">
          <span className="navbar-button red"></span>
          <span className="navbar-button yellow"></span>
          <span className="navbar-button green"></span>
          <div className="navbar-title">Termozet</div>
          
        </div>
        <div className="margin unblank">
          <Prompt placeholder="Type &rarr; '.help' and press 'Enter'" value="" cd=""/>
        </div>
      </div>
    </>
  );
}

export default App;
