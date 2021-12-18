import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "welcme to the new blog"
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
        <h2>Terefe comming home soon</h2>
        <h3>{title}</h3>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
