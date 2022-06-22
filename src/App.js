import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
       
          <Navbar/>
          <Home/>
        
          <footer>Created by: <a href='https://github.com/Gnova09'>Gnova09</a></footer>
    </div>
  );
}

export default App;
