import React, { useState } from "react";
import "../styles/newWorkout.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NewExerciseResults from "./NewExerciseResults";

const NewWorkout = () => {
  const [workoutsData] = useState([
    {
      name: "Workout nro.1",
      exercises: [
        {
          name: "Deadlift",
          sets: [
            {
              id: 1,
              reps: 10,
              weight: 100
            },
            {
              id: 2,
              reps: 9,
              weight: 90
            },
            {
              id: 3,
              reps: 8,
              weight: 80
            }
          ],
        },
        {
          name: "Squat",
          sets: [
            {
              id: 1,
              reps: 10,
              weight: 80
            },
            {
              id: 2,
              reps: 9,
              weight: 70
            },
            {
              id: 3,
              reps: 8,
              weight: 60
            }
          ]
        },
        {
          name: "Bench press",
          sets: [
            {
              id: 1,
              reps: 10,
              weight: 60
            },
            {
              id: 2,
              reps: 9,
              weight: 50
            },
            {
              id: 3,
              reps: 8,
              weight: 40
            }
          ]
        }
      ]
    },
    {
      name: "Workout nro.2",
      exercises: [
        {
          name: "Leg press",
          sets: [
            {
              id: 1,
              reps: 10,
              weight: 120
            },
            {
              id: 2,
              reps: 9,
              weight: 100
            },
            {
              id: 3,
              reps: 8,
              weight: 90
            }
          ]
        },
        {
          name: "Lat pulldown",
          sets: [
            {
              id: 1,
              reps: 10,
              weight: 50
            },
            {
              id: 2,
              reps: 9,
              weight: 55
            },
            {
              id: 3,
              reps: 8,
              weight: 60
            }
          ]
        },
        {
          name: "Shoulder press",
          sets: [
            {
              id: 1,
              reps: 10,
              weight: 30
            },
            {
              id: 2,
              reps: 9,
              weight: 40
            },
            {
              id: 3,
              reps: 8,
              weight: 45
            }
          ]
        }
      ]
    },
    {
      name: "Workout nro.3",
      exercises: [
        {
          name: "Squat",
          sets: [
            {
              id: 1,
              reps: 9,
              weight: 80
            },
            {
              id: 2,
              reps: 9,
              weight: 70
            },
            {
              id: 3,
              reps: 8,
              weight: 60
            }
          ]
        },
        {
          name: "Bench press",
          sets: [
            {
              id: 1,
              reps: 9,
              weight: 60
            },
            {
              id: 2,
              reps: 9,
              weight: 50
            },
            {
              id: 3,
              reps: 8,
              weight: 40
            }
          ]
        },
        {
          name: "Leg press",
          sets: [
            {
              id: 1,
              reps: 9,
              weight: 120
            },
            {
              id: 2,
              reps: 9,
              weight: 100
            },
            {
              id: 3,
              reps: 8,
              weight: 90
            }
          ]
        }
      ]
    }
  ]);

  const [exercisesResults, setExercisesResults] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState("");

  const handleSelected = (e) => {
    e.preventDefault();
    setSelectedWorkout(e.target.value);
    console.log(selectedWorkout);
  };

  console.log(exercisesResults)

  return (
    <Container className="newWorkout-container">
      <Row>
        <Col>
          <h1 className="newWorkoutPage-title text-center my-5">New workout</h1>
        </Col>
      </Row>
      <Form>
        <Form.Group>
          <Col className="newWorkout-col mb-5 px-5">
            <Row className="mx-auto my-5 w-75">
              <Col>
                <Form.Control type="text" size="lg" placeholder="date"></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select className="mb-4" size="lg" onChange={(e) => handleSelected(e)}>
                  <option>Select workout</option>
                  {workoutsData.map((workout, workout_id) => (
                    <option key={workout_id}>{workout.name}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            {workoutsData.map(
              (workout, workout_id) =>
                selectedWorkout === workout.name && (
                  <Col key={workout_id}>
                    {workout.exercises.map((exercise, exercise_id) => (
                      <Row key={exercise_id}>
                         <NewExerciseResults exercise={exercise} exercisesResults={exercisesResults} setExercisesResults={setExercisesResults}/>
                      </Row>
                    ))}
                  </Col>
                )
            )}
          </Col>
          <Row className="mb-5">
            <Button className="addNewWorkoutButton mx-auto" type="submit" size="lg">
              Add workout
            </Button>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewWorkout;
