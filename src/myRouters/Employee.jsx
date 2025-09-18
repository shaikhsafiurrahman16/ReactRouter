import React from 'react'
import { useParams } from 'react-router-dom'

function Employee() {
    const {name,age} = useParams();
  return (
    <div>   
      <h1>{name} is a employee and is age is {age}</h1>
    </div>
  )
}

export default Employee
