import React from "react"
import { useParams } from "react-router-dom"

const ExerciseItem = () => {
  let params = useParams()

  return ( <h1>Exercise Item {params.id}</h1> );
}
 
export default ExerciseItem;