import './index.css';
import Home from './Home';
import Navbar from './Navbar';




function App() {
  return (
    <div className="App">
<Navbar />
<div className="content">
  <h3>Content Starts from here</h3>
</div>
<Home />
    </div>
  );
}

export default App;
