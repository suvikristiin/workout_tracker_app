import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import NewExerciseSet from "./NewExerciseSets";

const NewExerciseResults = ({ exercise, exercisesResults, setExercisesResults}) => {
  NewExerciseResults.propTypes = {
    exercise: PropTypes.object,
    exercisesResults: PropTypes.array,
    setExercisesResults: PropTypes.func
  };

  const [sets, setSets] = useState([])
  const [exerciseResults, setExerciseResults] = useState([]);
  console.log(exercisesResults);
  console.log(setExercisesResults);
  console.log(sets);
  console.log(exerciseResults)

  console.log(exerciseResults);

  return (
    <Row>
      <Col className="newExercise-col mb-4">
        <Row>
          <Col>{exercise.name}</Col>
        </Row>
        {exercise.sets.map((set, set_id) => (
          <NewExerciseSet
            key={set_id}
            setId={set.id}
            sets={sets}
            setSets={setSets}
            exerciseResults={exerciseResults}
            setExerciseResults={setExerciseResults}
            exerciseName={exercise.name}
          />
        ))}
        <Row>
          <Col>
            <Row>
              <Col>The results in the previous workout</Col>
            </Row>
            <Row>
              {exercise.sets.map((set, set_id) => (
                <Row key={set_id}>
                  <Col>Set {set_id + 1}</Col>
                  <Col>Reps:</Col>
                  <Col>{set.reps}</Col>
                  <Col>Weight:</Col>
                  <Col>{set.weight}</Col>
                </Row>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NewExerciseResults;
