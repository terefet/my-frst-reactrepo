import logo from './logo.svg';
import './App.css';

function App() {
  const title = "welcme to the new blog"
  return (
    <div className="App">
      <div className="content">
        <h1>App Commponent</h1>
        <h2>hi there</h2>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default App;
