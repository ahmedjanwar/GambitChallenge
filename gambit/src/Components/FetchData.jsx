import React from 'react'
import data from '../Data.json'
import '../App.css';

const  newdata= data.map( ( data) =>{
  return  (
    <div key= {data.id} className='data'>   
        <div className='id'>
          ID: { data.ID}
        </div>
        <div className='value'>
             Value: {data.Value}
        </div>  
    </div> 
  
  )
}
)
function FetchData() {
  return (
    <div>
         <p className='header'>Data Readings</p>
        <div>
            {newdata}
        </div>
    </div>
  )
}

export default FetchData