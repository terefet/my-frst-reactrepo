import logo from './logo.svg';
import './App.css';

function App() {
  const title = "welcme to the new blog"
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <div className="content">
        <h1>App Commponent</h1>
        <h2>Terefe comming home soon</h2>
        <h3>{title}</h3>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
