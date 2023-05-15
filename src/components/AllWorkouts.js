import React from "react";
import "../styles/allWorkouts.css";
import { Container, Col, Row } from "react-bootstrap";
import {Link } from "react-router-dom";
const AllWorkouts = () => {
  const workoutsData = {
    "Bodybuilding program": [
      {
        week: 19,
        workouts: [
          {
            id: 4,
            name: "Workout nro.1",
            date: "2023-05-10"
          },
          {
            id: 5,
            name: "Workout nro.2",
            date: "2023-05-09"
          }
        ]
      },
      {
        week: 18,
        workouts: [
          {
            id: 6,
            name: "Workout nro.3",
            date: "2023-05-05"
          },
          {
            id: 4,
            name: "Workout nro.1",
            date: "2023-05-04"
          },
          {
            id: 5,
            name: "Workout nro.2",
            date: "2023-05-02"
          }
        ]
      },
      {
        week: 17,
        workouts: [
          {
            id: 6,
            name: "Workout nro.3",
            date: "2023-04-28"
          }
        ]
      }
    ],
    "Strength program": [
      {
        week: 16,
        workouts: [
          {
            id: 4,
            name: "Workout nro.1",
            date: "2023-04-20"
          },
          {
            id: 5,
            name: "Workout nro.2",
            date: "2023-04-18"
          }
        ]
      },
      {
        week: 15,
        workouts: [
          {
            id: 1,
            name: "Workout nro.1",
            date: "2023-04-14"
          },
          {
            id: 2,
            name: "Workout nro.2",
            date: "2023-04-12"
          },
          {
            id: 3,
            name: "Workout nro.3",
            date: "2023-04-10"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Container className="workout-container justify-content-center">
        <Row>
          <Col>
            <h1 className="workoutsPage-title text-center my-5">All workouts</h1>
          </Col>
        </Row>
        {Object.keys(workoutsData).map((trainingPlan, plan_id) => (
          <Col className="plan-column mb-5 px-5" key={plan_id}>
            <Row>
              <Col>
                <h2 className="plan-title text-center mt-5">{trainingPlan}</h2>
              </Col>
            </Row>
            {workoutsData[trainingPlan].map((week, week_id) => (
              <Row key={week_id}>
                <Col>
                  <Row>
                    <Col>
                      <h4 className="week-number text-center mt-3 mb-3">Week {week.week}</h4>
                    </Col>
                  </Row>
                  {week.workouts.map((workout, workout_id) => (
                    <Link key={workout_id} to={"/workouts/" + workout.id} style={{ textDecoration: 'none' }}>
                      <Row className="workout-row mb-4">
                        <Col className="col-4 workout-date">{workout.date}</Col>
                        <Col className="workout-name">{workout.name}</Col>
                      </Row>
                    </Link>
                  ))}
                </Col>
              </Row>
            ))}
          </Col>
        ))}
      </Container>
    </>
  );
};

export default AllWorkouts;
