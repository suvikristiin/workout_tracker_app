import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/workoutItem.css";

const WorkoutItem = () => {
  const location = useLocation();
  const selectedWorkout = location.state;

  const workoutsAllData = {
    workouts: [
      {
        id: 11,
        plan_id: 1,
        exercises: [
          {
            id: 1,
            exercise_id: 1,
            name: "Deadlift",
            score: [
              { reps: 10, weight: 100 },
              { reps: 9, weight: 90 },
              { reps: 8, weight: 80 }
            ],
            volumeToPrevious: "+100",
            volumeToStart: "+100"
          },
          {
            id: 2,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 10, weight: 80 },
              { reps: 9, weight: 70 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "+80",
            volumeToStart: "+230"
          },
          {
            id: 3,
            exercise_id: 3,
            name: "Bench press",
            score: [
              { reps: 10, weight: 60 },
              { reps: 9, weight: 50 },
              { reps: 8, weight: 40 }
            ],
            volumeToPrevious: "+60",
            volumeToStart: "+170"
          }
        ]
      },
      {
        id: 10,
        plan_id: 1,
        exercises: [
          {
            id: 4,
            exercise_id: 4,
            name: "Leg press",
            score: [
              { reps: 10, weight: 120 },
              { reps: 9, weight: 100 },
              { reps: 8, weight: 90 }
            ],
            volumeToPrevious: "+120",
            volumeToStart: "+340"
          },
          {
            id: 5,
            exercise_id: 5,
            name: "Lat pulldown",
            score: [
              { reps: 10, weight: 50 },
              { reps: 9, weight: 55 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "+50",
            volumeToStart: "+50"
          },
          {
            id: 6,
            exercise_id: 6,
            name: "Shoulder press",
            score: [
              { reps: 10, weight: 30 },
              { reps: 9, weight: 40 },
              { reps: 8, weight: 45 }
            ],
            volumeToPrevious: "+30",
            volumeToStart: "+30"
          }
        ]
      },
      {
        id: 9,
        plan_id: 1,
        exercises: [
          {
            id: 7,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 9, weight: 80 },
              { reps: 9, weight: 70 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "+70",
            volumeToStart: "+150"
          },
          {
            id: 8,
            exercise_id: 3,
            name: "Bench press",
            score: [
              { reps: 9, weight: 60 },
              { reps: 9, weight: 50 },
              { reps: 8, weight: 40 }
            ],
            volumeToPrevious: "+50",
            volumeToStart: "+110"
          },
          {
            id: 9,
            exercise_id: 4,
            name: "Leg press",
            score: [
              { reps: 9, weight: 120 },
              { reps: 9, weight: 100 },
              { reps: 8, weight: 90 }
            ],
            volumeToPrevious: "+100",
            volumeToStart: "+220"
          }
        ]
      },
      {
        id: 8,
        plan_id: 1,
        exercises: [
          {
            id: 10,
            exercise_id: 1,
            name: "Deadlift",
            score: [
              { reps: 9, weight: 100 },
              { reps: 8, weight: 90 },
              { reps: 8, weight: 80 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          },
          {
            id: 11,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 9, weight: 80 },
              { reps: 8, weight: 70 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "+80",
            volumeToStart: "+80"
          },
          {
            id: 12,
            exercise_id: 3,
            name: "Bench press",
            score: [
              { reps: 9, weight: 60 },
              { reps: 8, weight: 50 },
              { reps: 8, weight: 40 }
            ],
            volumeToPrevious: "+60",
            volumeToStart: "+60"
          }
        ]
      },
      {
        id: 7,
        plan_id: 1,
        exercises: [
          {
            id: 13,
            exercise_id: 4,
            name: "Leg press",
            score: [
              { reps: 9, weight: 120 },
              { reps: 8, weight: 100 },
              { reps: 8, weight: 90 }
            ],
            volumeToPrevious: "+120",
            volumeToStart: "+120"
          },
          {
            id: 14,
            exercise_id: 5,
            name: "Lat pulldown",
            score: [
              { reps: 9, weight: 50 },
              { reps: 9, weight: 55 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          },
          {
            id: 15,
            exercise_id: 6,
            name: "Shoulder press",
            score: [
              { reps: 9, weight: 30 },
              { reps: 9, weight: 40 },
              { reps: 8, weight: 45 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          }
        ]
      },
      {
        id: 6,
        plan_id: 1,
        exercises: [
          {
            id: 16,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 8, weight: 80 },
              { reps: 8, weight: 70 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          },
          {
            id: 17,
            exercise_id: 3,
            name: "Bench press",
            score: [
              { reps: 8, weight: 60 },
              { reps: 8, weight: 50 },
              { reps: 8, weight: 40 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          },
          {
            id: 18,
            exercise_id: 4,
            name: "Leg press",
            score: [
              { reps: 8, weight: 120 },
              { reps: 8, weight: 100 },
              { reps: 8, weight: 90 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          }
        ]
      },
      {
        id: 5,
        plan_id: 2,
        exercises: [
          {
            id: 16,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 8, weight: 80 },
              { reps: 8, weight: 70 },
              { reps: 8, weight: 60 }
            ],
            volumeToPrevious: "+60",
            volumeToStart: "+130"
          },
          {
            id: 10,
            exercise_id: 3,
            name: "Bench press",
            score: [
              { reps: 8, weight: 100 },
              { reps: 8, weight: 90 },
              { reps: 7, weight: 80 }
            ],
            volumeToPrevious: "+90",
            volumeToStart: "+90"
          }
        ]
      },
      {
        id: 4,
        plan_id: 2,
        exercises: [
          {
            id: 16,
            exercise_id: 4,
            name: "Leg press",
            score: [
              { reps: 8, weight: 100 },
              { reps: 8, weight: 90 },
              { reps: 7, weight: 90 }
            ],
            volumeToPrevious: "+90",
            volumeToStart: "+90"
          },
          {
            id: 10,
            exercise_id: 1,
            name: "Deadlift",
            score: [
              { reps: 8, weight: 100 },
              { reps: 8, weight: 90 },
              { reps: 8, weight: 80 }
            ],
            volumeToPrevious: "+80",
            volumeToStart: "+170"
          }
        ]
      },
      {
        id: 3,
        plan_id: 2,
        exercises: [
          {
            id: 16,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 8, weight: 80 },
              { reps: 8, weight: 70 },
              { reps: 7, weight: 60 }
            ],
            volumeToPrevious: "+70",
            volumeToStart: "+70"
          },
          {
            id: 10,
            exercise_id: 3,
            name: "Bench press",
            score: [
              { reps: 8, weight: 100 },
              { reps: 7, weight: 90 },
              { reps: 7, weight: 80 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          }
        ]
      },
      {
        id: 2,
        plan_id: 2,
        exercises: [
          {
            id: 16,
            exercise_id: 4,
            name: "Leg press",
            score: [
              { reps: 8, weight: 100 },
              { reps: 7, weight: 90 },
              { reps: 7, weight: 90 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          },
          {
            id: 10,
            exercise_id: 1,
            name: "Deadlift",
            score: [
              { reps: 8, weight: 100 },
              { reps: 8, weight: 90 },
              { reps: 7, weight: 80 }
            ],
            volumeToPrevious: "+90",
            volumeToStart: "+90"
          }
        ]
      },
      {
        id: 1,
        plan_id: 2,
        exercises: [
          {
            id: 16,
            exercise_id: 2,
            name: "Squat",
            score: [
              { reps: 8, weight: 80 },
              { reps: 7, weight: 70 },
              { reps: 7, weight: 60 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          },
          {
            id: 10,
            exercise_id: 1,
            name: "Deadlift",
            score: [
              { reps: 8, weight: 100 },
              { reps: 7, weight: 90 },
              { reps: 7, weight: 80 }
            ],
            volumeToPrevious: "0",
            volumeToStart: "0"
          }
        ]
      }
    ]
  };

  const workoutItem = workoutsAllData.workouts.filter(
    (workout) => workout.id === selectedWorkout.id
  );
  console.log(workoutItem);

  return (
    <Container className="selectWorkout-container">
      <Row>
        <Col>
          <h1 className="selectWorkout-title text-center my-5">{selectedWorkout.name}</h1>
        </Col>
      </Row>
      <Col className="selectWorkout-column px-5 mb-4">
        <Row className="selectedWorkout-date-row mx-auto">
          <Col>
            <h2 className="selectWorkout-date text-center my-4">{selectedWorkout.date}</h2>
          </Col>
        </Row>
        {Object.keys(workoutItem).map((workoutColumn, id) => (
          <Col key={id}>
            {workoutItem[workoutColumn].exercises.map((exercise, exercise_id) => (
              <Col className="exerciseResult-column text-center mb-4" key={exercise_id}>
                <Row className="exercise-name-row mx-auto mb-3">
                  <Col className="exercise-name-col mx-auto my-2">{exercise.name}</Col>
                </Row>
                <Row>
                  <Col className="workout-results-title mb-2">Workout results</Col>
                </Row>
                <Row className="sets-row mb-3 px-0 mx-auto justify-content-center">
                  {exercise.score.map((set, set_id) => (
                    <Col className="set-col col-3 px-0" key={set_id}>
                      {set.reps} reps, {set.weight} kg
                    </Col>
                  ))}
                </Row>
                <Row className="px-2">
                  <Col className="volume-title">Change in workout volume</Col>
                </Row>
                <Row className="volume-previous">
                  <Col>to the previous workout: {exercise.volumeToPrevious} kg</Col>
                </Row>
                <Row className="volume-period-start mb-3">
                  <Col>to the beginning of the training period: {exercise.volumeToStart} kg</Col>
                </Row>
              </Col>
            ))}
          </Col>
        ))}
      </Col>
    </Container>
  );
};

export default WorkoutItem;
