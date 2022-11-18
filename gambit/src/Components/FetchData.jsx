import React from 'react'
import data from '../Data.json'
import '../App.css';

import DataRef from '../DataRef.json'

const RecordedData = data.map((data)=>{
  if (data.Value == 48988){
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
  return (
    <div>
         <p className='header'>Data Readings</p>
        <div>
            {newdata}
            {RecordedData}
        </div>
    </div>
  )
}

export default FetchData