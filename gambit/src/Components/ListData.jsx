import React from 'react'
import Data from '../Data.json'

function ListData() {
    const [recordData,setRecordState] = React.useState(Data);
  return (
    <div className='main'>
        <h1>Fetched Data</h1>
        {recordData && 
            recordData.map(({ID, Value})=>(
                <div key={ID} className="row">
                    <strong>{ID} = </strong>
                    
                    <strong>{Value}</strong>
                </div>
            ))}

    </div>
  )
}

export default ListData