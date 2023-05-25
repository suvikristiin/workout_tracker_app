import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const NewExerciseSet = ({
  setId,
  sets,
  setSets,
  exerciseResults,
  setExerciseResults,
  exerciseName
}) => {
  NewExerciseSet.propTypes = {
    setId: PropTypes.number,
    sets: PropTypes.array,
    setSets: PropTypes.func,
    exerciseResults: PropTypes.array,
    setExerciseResults: PropTypes.func,
    exerciseName: PropTypes.string,
    exercisesResults: PropTypes.array,
    setExercisesResults: PropTypes.array
  };

  const addExerciseResult = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    const updatedExerciseResults = { ...exerciseResults, name: exerciseName, sets: [] };
    setExerciseResults(updatedExerciseResults);

    const newSetResult = sets.find((result) => result.id === setId);

    if (!newSetResult && name === "reps") {
      setSets([...sets, { id: setId, reps: value, weight: "" }]);
    } else if (!newSetResult && name === "weight") {
      setSets([...sets, { id: setId, reps: "", weight: value }]);
    } else {
      const updatedResults = sets.map((result) => {
        if (result.id === setId) {
          return { ...result, [name]: value };
        }
        return result;
      });
      setSets(updatedResults);
    }

    setExerciseResults({...exerciseResults, name: exerciseName, sets: sets });
  };

  return (
    <Row>
      <Col>Set {setId}</Col>
      <Col>
        <Form.Label>Reps:</Form.Label>
      </Col>
      <Col>
        <Form.Control type="text" name="reps" onChange={(e) => addExerciseResult(e)}></Form.Control>
      </Col>
      <Col>
        <Form.Label>Weight:</Form.Label>
      </Col>
      <Col>
        <Form.Control
          type="text"
          name="weight"
          onChange={(e) => addExerciseResult(e)}></Form.Control>
      </Col>
    </Row>
  );
};

export default NewExerciseSet;
