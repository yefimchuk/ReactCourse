import './App.css';

function App() {
  return (
  <div className="App">
      <Header/>
      <div className="App-header">Hello world</div>

  </div>
  );
}
let Header = () => {
  return (
      <div className="Header">

        <div>Home</div>
        <div>About us</div>
        <div>Contact</div>

      </div>
)
}
export default App;
