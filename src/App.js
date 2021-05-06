import logo from './logo.svg';
import './App.css';
import ReusableComponent from './component/ReusableComponent';


function App() {
  return (
    <div className="App">
  <ReusableComponent number = "1" />
  <ReusableComponent number = "2" />
    </div>
  );
}

export default App;
