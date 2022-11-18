import React,{useState} from 'react'
import data from '../Data.json'
import '../App.css';

import DataRef from '../DataRef.json'



const  newdata= DataRef.map( ( data) =>{
  if(data.REGISTER == 1529){
  return  (
    <div key= {data.id} className='data'>   
        <div className='id'>
             <p>{ data.REGISTER}</p>
             <p>{data.NUMBER}</p>
             <p>{data['VARIABLE NAME']}</p>
             <p>{data.FORMAT}</p>
             <p>{data.NOTE}</p>
        </div>  
    </div> 
  
  )
  }
}
)

function FetchData() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    //if (event.target.value != 0 && event.target.value != ""){
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
    //}
  };
  const RecordedData = data.map((data)=>{
   
    if (data.Value == message){
      return(
        <div key= {data.id} className='data'>   
          <div className='id'>
               <p>{data.ID}</p>
               <p>{data.Value}</p>
          </div>  
      </div> 
      )
    
  }
  }
  )
  return (
    <div>
         <p className='header'>Data Readings</p>
         <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

<button onClick={handleChange}>Show</button>
        <div>
            {newdata}
            {RecordedData}
        </div>
        
    </div>
  )
}

export default FetchData