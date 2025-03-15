import React, { useEffect } from 'react'

const SevenChild = ({value}) =>{

    useEffect(() => {
        console.log(`Child component Received new value: ${value}`)
    },[value]);

  return (
    <div>
    <h2>Child Component</h2>
    <h4>Received Value: {value}</h4>
    </div>
  )
}

export default SevenChild;