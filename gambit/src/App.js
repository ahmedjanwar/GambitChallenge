import './App.css';
import ChartData from './Components/ChartData';
import FetchData from './Components/FetchData';
import ListData from './Components/ListData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**  <FetchData />   
        <ListData />  */}
        <ChartData />
      </header>
    </div>
  );
}

export default App;
