import './App.css';
import data from './Data.json'

const  newdata= data.map( ( data) =>{
  return  (
    <div key= {data.id} >   
        <p>
          ID: { data.ID}
        </p>
        <p>
             Value: {data.Value}
        </p>  
    </div> 
  
  )
}
)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test</p>
        <div>
        {newdata}
        </div>
      </header>
    </div>
  );
}

export default App;
