import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/exerciseItem.css";

const ExerciseItem = () => {
  const location = useLocation();
  const selectedExercise = location.state;
  console.log(selectedExercise);

  const exercisesAllData = {
    exercises: [
      {
        id: 1,
        name: "Deadlift",
        trainingPlans: [
          {
            id: 1,
            title: "Bodybuilding program",
            workouts: [
              {
                id: 11,
                name: "Workout nro.1",
                date: "2023-05-10",
                score: [
                  { reps: 10, weight: 100 },
                  { reps: 9, weight: 90 },
                  { reps: 8, weight: 80 }
                ],
                volumeToPrevious: "+100",
                volumeToStart: "+100"
              },
              {
                id: 8,
                name: "Workout nro.1",
                date: "2023-05-04",
                score: [
                  { reps: 9, weight: 100 },
                  { reps: 9, weight: 90 },
                  { reps: 8, weight: 80 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          },
          {
            id: 2,
            title: "Strength program",
            workouts: [
              {
                id: 4,
                name: "Workout nro.2",
                date: "2023-04-18",
                score: [
                  { reps: 8, weight: 100 },
                  { reps: 8, weight: 90 },
                  { reps: 8, weight: 80 }
                ],
                volumeToPrevious: "+80",
                volumeToStart: "+170"
              },
              {
                id: 2,
                name: "Workout nro.2",
                date: "2023-04-12",
                score: [
                  { reps: 8, weight: 100 },
                  { reps: 8, weight: 90 },
                  { reps: 7, weight: 80 }
                ],
                volumeToPrevious: "+90",
                volumeToStart: "+90"
              },
              {
                id: 1,
                name: "Workout nro.3",
                date: "2023-04-10",
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
      },
      {
        id: 2,
        name: "Squat",
        trainingPlans: [
          {
            id: 1,
            title: "Bodybuilding program",
            workouts: [
              {
                id: 11,
                name: "Workout nro.1",
                date: "2023-05-10",
                score: [
                  { reps: 10, weight: 80 },
                  { reps: 9, weight: 70 },
                  { reps: 8, weight: 60 }
                ],
                volumeToPrevious: "+80",
                volumeToStart: "+230"
              },
              {
                id: 9,
                name: "Workout nro.3",
                date: "2023-05-05",
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
                name: "Workout nro.1",
                date: "2023-05-04",
                score: [
                  { reps: 9, weight: 80 },
                  { reps: 8, weight: 70 },
                  { reps: 8, weight: 60 }
                ],
                volumeToPrevious: "+80",
                volumeToStart: "+80"
              },
              {
                id: 6,
                name: "Workout nro.3",
                date: "2023-04-28",
                score: [
                  { reps: 8, weight: 80 },
                  { reps: 8, weight: 70 },
                  { reps: 8, weight: 60 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          },
          {
            id: 2,
            title: "Stregth program",
            workouts: [
              {
                id: 5,
                name: "Workout nro.1",
                date: "2023-04-20",
                score: [
                  { reps: 8, weight: 80 },
                  { reps: 8, weight: 70 },
                  { reps: 8, weight: 60 }
                ],
                volumeToPrevious: "+60",
                volumeToStart: "+130"
              },
              {
                id: 3,
                name: "Workout nro.1",
                date: "2023-04-14",
                score: [
                  { reps: 8, weight: 80 },
                  { reps: 8, weight: 70 },
                  { reps: 7, weight: 60 }
                ],
                volumeToPrevious: "+70",
                volumeToStart: "+70"
              },
              {
                id: 1,
                name: "Workout nro.3",
                date: "2023-04-10",
                score: [
                  { reps: 8, weight: 80 },
                  { reps: 7, weight: 70 },
                  { reps: 7, weight: 60 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Bench press",
        trainingPlans: [
          {
            id: 1,
            title: "Bodybuilding program",
            workouts: [
              {
                id: 11,
                name: "Workout nro.1",
                date: "2023-05-10",
                score: [
                  { reps: 10, weight: 60 },
                  { reps: 9, weight: 50 },
                  { reps: 8, weight: 40 }
                ],
                volumeToPrevious: "+60",
                volumeToStart: "+170"
              },
              {
                id: 9,
                name: "Workout nro.3",
                date: "2023-05-05",
                score: [
                  { reps: 9, weight: 60 },
                  { reps: 9, weight: 50 },
                  { reps: 8, weight: 40 }
                ],
                volumeToPrevious: "+50",
                volumeToStart: "+110"
              },
              {
                id: 8,
                name: "Workout nro.1",
                date: "2023-05-04",
                score: [
                  { reps: 9, weight: 60 },
                  { reps: 8, weight: 50 },
                  { reps: 8, weight: 40 }
                ],
                volumeToPrevious: "+60",
                volumeToStart: "+60"
              },
              {
                id: 6,
                name: "Workout nro.3",
                date: "2023-04-28",
                score: [
                  { reps: 8, weight: 60 },
                  { reps: 8, weight: 50 },
                  { reps: 8, weight: 40 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          },
          {
            id: 2,
            title: "Strength program",
            workouts: [
              {
                id: 5,
                name: "Workout nro.1",
                date: "2023-04-20",
                score: [
                  { reps: 8, weight: 100 },
                  { reps: 8, weight: 90 },
                  { reps: 7, weight: 80 }
                ],
                volumeToPrevious: "+90",
                volumeToStart: "+90"
              },
              {
                id: 3,
                name: "Workout nro.1",
                date: "2023-04-14",
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
      },
      {
        id: 4,
        name: "Leg press",
        trainingPlans: [
          {
            id: 1,
            title: "Bodybuilding program",
            workouts: [
              {
                id: 10,
                name: "Workout nro.2",
                date: "2023-05-09",
                score: [
                  { reps: 10, weight: 120 },
                  { reps: 9, weight: 100 },
                  { reps: 8, weight: 90 }
                ],
                volumeToPrevious: "+120",
                volumeToStart: "+340"
              },
              {
                id: 9,
                name: "Workout nro.3",
                date: "2023-05-05",
                score: [
                  { reps: 9, weight: 120 },
                  { reps: 9, weight: 100 },
                  { reps: 8, weight: 90 }
                ],
                volumeToPrevious: "+100",
                volumeToStart: "+220"
              },
              {
                id: 7,
                name: "Workout nro.2",
                date: "2023-05-02",
                score: [
                  { reps: 9, weight: 120 },
                  { reps: 8, weight: 100 },
                  { reps: 8, weight: 90 }
                ],
                volumeToPrevious: "+120",
                volumeToStart: "+120"
              },
              {
                id: 6,
                name: "Workout nro.3",
                date: "2023-04-28",
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
            id: 2,
            title: "Strength program",
            workouts: [
              {
                id: 4,
                name: "Workout nro.2",
                date: "2023-04-18",
                score: [
                  { reps: 8, weight: 100 },
                  { reps: 8, weight: 90 },
                  { reps: 7, weight: 90 }
                ],
                volumeToPrevious: "+90",
                volumeToStart: "+90"
              },
              {
                id: 2,
                name: "Workout nro.2",
                date: "2023-04-12",
                score: [
                  { reps: 8, weight: 100 },
                  { reps: 7, weight: 90 },
                  { reps: 7, weight: 90 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "lat pulldown",
        trainingPlans: [
          {
            id: 1,
            title: "Bodybuilding program",
            workouts: [
              {
                id: 10,
                name: "Workout nro.2",
                date: "2023-05-09",
                score: [
                  { reps: 10, weight: 50 },
                  { reps: 9, weight: 55 },
                  { reps: 8, weight: 60 }
                ],
                volumeToPrevious: "+50",
                volumeToStart: "+50"
              },
              {
                id: 7,
                name: "Workout nro.2",
                date: "2023-05-02",
                score: [
                  { reps: 9, weight: 50 },
                  { reps: 9, weight: 55 },
                  { reps: 8, weight: 60 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Shoulder press",
        trainingPlans: [
          {
            id: 1,
            title: "Bodybuilding program",
            workouts: [
              {
                id: 10,
                name: "Workout nro.2",
                date: "2023-05-09",
                score: [
                  { reps: 10, weight: 30 },
                  { reps: 9, weight: 40 },
                  { reps: 8, weight: 45 }
                ],
                volumeToPrevious: "+30",
                volumeToStart: "+30"
              },
              {
                id: 7,
                name: "Workout nro.2",
                date: "2023-05-02",
                score: [
                  { reps: 9, weight: 30 },
                  { reps: 9, weight: 40 },
                  { reps: 8, weight: 45 }
                ],
                volumeToPrevious: "0",
                volumeToStart: "0"
              }
            ]
          }
        ]
      }
    ]
  };

  const allExerciseResults = exercisesAllData.exercises.find(
    (exercise) => selectedExercise.exercise.id === exercise.id
  );

  const exerciseResults = allExerciseResults.trainingPlans.find(
    (plan) => plan.id === selectedExercise.plan
  );

  console.log(exerciseResults);

  return (
    <Container className="selectedExercise-container">
      <Row>
        <Col>
          <h1 className="selectedExercise-title text-center my-5">
            {selectedExercise.exercise.name}
          </h1>
        </Col>
      </Row>
      <Col className="selectExercise-column mb-5 px-5">
        <Row className="selectedExercise-row-title mx-auto">
          <Col>
            <h3 className="selectPlan-title text-center my-4">{exerciseResults.title}</h3>
          </Col>
        </Row>
        {exerciseResults.workouts.map((workout, workout_id) => (
          <Row key={workout_id}>
            <Col className="workoutResult-column mb-4">
              <Row className="workout-name-row mb-2">
                <Col className="mx-auto">
                  <p className="workout-name-col text-center my-2">{workout.name}</p>
                </Col>
              </Row>
              <Row className="workout-date-row mx-auto mb-2">
                <Col className="workout-date-col text-center">{workout.date}</Col>
              </Row>
              <Row>
                <Col className="workout-results-title text-center mb-2">Workout results</Col>
              </Row>
              <Row className="sets-row mb-3 px-0 mx-auto justify-content-center">
                {workout.score.map((set, set_id) => (
                  <Col className="set-col col-3 px-0 text-center" key={set_id}>
                    {set.reps} reps, {set.weight} kg
                  </Col>
                ))}
              </Row>
              <Row className="px-2 text-center">
                <Col className="volume-title">Change in workout volume</Col>
              </Row>
              <Row className="volume-previous text-center">
                <Col>to the previous workout: {workout.volumeToPrevious} kg</Col>
              </Row>
              <Row className="volume-period-start mb-3 text-center">
                <Col>to the beginning of the training period: {workout.volumeToStart} kg</Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default ExerciseItem;
