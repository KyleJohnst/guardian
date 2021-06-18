import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Guardian Search</h1>
      <form>
      <label for="input">Search for Guardian articles: </label>
      <input type="text" placeholder="Search Term"></input>
      <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;