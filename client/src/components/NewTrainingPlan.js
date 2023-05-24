import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "../styles/newTrainingPlan.css";

const NewTrainingPlan = () => {
  const [trainingPlan, setTrainingPlan] = useState({
    name: "",
    workouts: [{ name: "", exercises: [{ name: "", sets: "" }] }]
  });

  const addNewPlanName = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    setTrainingPlan({ ...trainingPlan, name: newName });
    console.log(trainingPlan);
  };

  const addNewWorkout = (e) => {
    e.preventDefault();
    const newWorkoutObject = {
      name: "",
      exercises: [
        {
          name: "",
          sets: ""
        }
      ]
    };
    setTrainingPlan({
      ...trainingPlan,
      workouts: [...trainingPlan.workouts, newWorkoutObject]
    });
    console.log(trainingPlan);
  };

  const addNewWorkoutName = (e, workout_id) => {
    e.preventDefault();
    const newWorkoutName = { ...trainingPlan };
    newWorkoutName.workouts[workout_id].name = e.target.value;
    setTrainingPlan(newWorkoutName);
    console.log(trainingPlan);
  };

  const addNewExercise = (e, workout_id) => {
    e.preventDefault();
    const newExerciseObject = {
      name: "",
      sets: ""
    };
    const newExercise = { ...trainingPlan };
    newExercise.workouts[workout_id].exercises.push(newExerciseObject);

    setTrainingPlan(newExercise);
    console.log(trainingPlan);
  };

  const sendTrainingPlan = (e) => {
    e.preventDefault();
    //send the data to the backend...
  }

  return (
    <Container className="newPlan-container">
      <Row>
        <Col>
          <h1 className="newPlanPage-title text-center my-5">New training plan</h1>
        </Col>
      </Row>
      <Col className="trainingPlan-col mb-5 px-5">
        <Form>
          <Form.Group>
            <Row className="mx-auto my-5 w-75">
              <Col>
                <Form.Control
                  className="trainingPlan-form"
                  size="lg"
                  type="text"
                  placeholder="Training plan name"
                  onChange={(e) => addNewPlanName(e)}
                />
              </Col>
            </Row>
            {trainingPlan.workouts.map((workout, workout_id) => (
              <Row key={workout_id} className="trainingPlan-row mb-4">
                <Row className="mb-4 mx-auto">
                  <Col>
                    <Form.Control
                      className="workoutNameForm mx-auto"
                      size="lg"
                      type="text"
                      placeholder="Workout name"
                      onChange={(e) => addNewWorkoutName(e, workout_id)}
                    />
                  </Col>
                </Row>

                {workout.exercises.map((exercise, exercise_id) => (
                  <Row key={exercise_id} className="exerciseForm-row mb-2 mx-auto">
                    <Col className="px-1">
                      <Form.Control className="exerciseNameForm" size="lg" type="text" placeholder="Exercise name" />
                    </Col>
                    <Col className="px-1">
                      <Form.Control className="exerciseSetsForm" size="lg" type="text" placeholder="Number of sets" />
                    </Col>
                  </Row>
                ))}
                <Button
                  className="addExerciseButton mx-auto"
                  size="lg"
                  type="submit"
                  onClick={(e) => {
                    addNewExercise(e, workout_id);
                  }}>
                  Add new exercise
                </Button>
              </Row>
            ))}
            <Row>
              <Button className="addWorkoutButton mb-4 mx-auto" size="lg" type="submit" onClick={(e) => addNewWorkout(e)}>
                Add new workout
              </Button>
            </Row>
          </Form.Group>
        </Form>
      </Col>
      <Row className="mb-5">
        <Button className="addPlanButton mx-auto" size="lg" type="submit" onClick={(e) => sendTrainingPlan(e)}>Add training plan</Button>
      </Row>
    </Container>
  );
};

export default NewTrainingPlan;
