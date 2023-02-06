import logo from './logo.svg';
import './App.css';
import TestingHeader from './Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestingHeader test="This is our new title!"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestingHeader test="This is our new title 2!"/>
      </header>
    </div>
  );
}

export default App;
