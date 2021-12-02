import './App.css';
import Header from "./Header";

function App() {
  return (
  <div className="App">

      <div className="App-header">
          <div className="box box1">
              <div className="nested">a</div>
              <div className="nested">b</div>
              <div className="nested">c</div>
          </div>
          <div className="box box2">Two</div>
          <div className="box box3">Three</div>
          <div className="box box4">Four</div>
          <div className="box box5">Five</div>
      </div>

  </div>
  );
}

export default App;
