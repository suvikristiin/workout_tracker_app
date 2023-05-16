import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/allExercises.css";
import "../styles/allWorkouts.css";
import { Link } from "react-router-dom";
//import ExerciseItem from "./AllExercises.js";

const AllExercises = () => {
  const exercisesData = {
    trainingPlans: [
      {
        id: 1,
        title: "Bodybuilding program",
        exercises: [
          {
            id: 1,
            name: "Deadlift"
          },
          {
            id: 2,
            name: "Squat"
          },
          {
            id: 3,
            name: "Bench press"
          },
          {
            id: 4,
            name: "Leg press"
          },
          {
            id: 5,
            name: "Lat pulldown"
          },
          {
            id: 6,
            name: "Shoulder press"
          }
        ]
      },
      {
        id: 2,
        title: "Strength program",
        exercises: [
          {
            id: 1,
            name: "Deadlift"
          },
          {
            id: 2,
            name: "Squat"
          },
          {
            id: 3,
            name: "Bench press"
          }
        ]
      }
    ]
  };

  return (
    <Container className="exercises-container">
      <Row>
        <Col>
          <h1 className="exercisesPage-title text-center my-5">All Exercises</h1>
        </Col>
      </Row>
      {exercisesData.trainingPlans.map((plan, plan_id) => (
        <Col className="plan-column mb-5 px-5" key={plan_id}>
          <Row className="plan-row mx-auto">
            <Col>
              <h2 className="plan-title text-center my-5">{plan.title}</h2>
            </Col>
          </Row>
          {plan.exercises.map((exercise, exercise_id) => (
            <Link className="exercise-link" key={exercise_id} to={"/exercises/" + exercise.id}>
              <Row className="exercise-row mb-4">
                <Col className="exercise-name text-center">{exercise.name}</Col>
              </Row>
            </Link>
          ))}
        </Col>
      ))}
    </Container>
  );
};

export default AllExercises;
