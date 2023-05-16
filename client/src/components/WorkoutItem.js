import React from "react";
import { useParams } from "react-router-dom"

const WorkoutItem = () => {
  let params = useParams()

  return ( <h1>Workout Item {params.id}</h1> );
}
 
export default WorkoutItem;