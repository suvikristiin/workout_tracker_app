import React, { useState } from "react";
import "../styles/navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="nav-bar navbar-dark" expand="md" expanded={expanded}>
      <Container fluid>
        <Navbar.Toggle
          className="navbar-toggle"
          onClick={() => setExpanded(!expanded)}></Navbar.Toggle>
        <Navbar.Brand className="appName mx-auto">Workout tracker</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="nav-links me-auto">
            <Nav.Link className="workout-link" onClick={() => setExpanded(false)}>
              Workouts
            </Nav.Link>
            <Nav.Link className="exercise-link" onClick={() => setExpanded(false)}>
              Exercises
            </Nav.Link>
            <Nav.Link className="addWorkout-link" onClick={() => setExpanded(false)}>
              Add workout
            </Nav.Link>
            <Nav.Link className="addTrainingPlan-link" onClick={() => setExpanded(false)}>
              Add training plan
            </Nav.Link>
          </Nav>
          <Nav>
            <Button className="logOutButton">Log out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
