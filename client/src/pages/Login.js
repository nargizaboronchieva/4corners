import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import logo from "../../src/components/Nav/4corners_white.png";

function Login(props) {
  // Create-account states and hooks.
  const [signUpData, setSignUpData] = useState({})

  // Log the current state of signUpData after every key stroke.
  useEffect(() => console.log("State is: ", signUpData), [signUpData])

  // State updates when user hits key stroke.
  const handleCreateUserInputChange = e => {
    // Parse value of field corresponding to the form input name. 
    const { name, value } = e.target
    setSignUpData({ ...signUpData, [name]: value })
  }

  // Confirm that password and confirm password match.
  const [confirmPasswordState, setConfirmPasswordState] = useState({})

  // Log the current state of confirmPasswordState after every key stroke.
  useEffect(() => console.log("State is: ", confirmPasswordState), [confirmPasswordState])

  const listenConfirmPassword = e => {
    // Parse value of field corresponding to the form input name. 
    const { name, value } = e.target
    setConfirmPasswordState({ ...confirmPasswordState, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (signUpData.password === confirmPasswordState.confirmPassword) {

      console.log(signUpData)
      console.log(signUpData.password)
      console.log(confirmPasswordState.confirmPassword)

      API.createAccount(signUpData)
        .then(res => {
          if (res.data.username) {
            alert("The user has been created. Please use your e-mail to login.");
          } else {
            alert("Error creating a user :(");
          }
          console.log(res);
        })
        .catch(err => console.log(err))
    }
    else {
      console.log("Passwords don't match")
    }
  }

  // Login user functions.
  const [userLoginCredentials, setUserLoginCredentials] = useState({});

  const handleLoginCredentialsInputChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setUserLoginCredentials({ ...userLoginCredentials, [name]: value })
  }

  const handleSubmitLogin = e => {
    e.preventDefault()

    API.loginUser(userLoginCredentials)
      .then(res => {
        if (res.status === 200) {
          props.changeState("isAuthenticated", true);
          props.changeUserData(
            "firstName", res.data.firstName);
        }
      }
      )
  }


  return (
    <div id="loginRoot">
      <Container>
        <Row className="loginHeader">
          <Col className={"col-md-3"}>
            <img className="loginLogo" src={logo} alt="Logo" />
          </Col>
          <Col className={"col-md-9"}>
            <h1>4Corners</h1><br />
            <h3>Power Your Project</h3><br />
            <h5>Manage Task Tracking, Communication, and Resources in One App!</h5>
          </Col>
        </Row>
        <Row>
          <Col className={"col-md-6 loginBox"}>
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="email" onChange={handleLoginCredentialsInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="password" onChange={handleLoginCredentialsInputChange} />
              </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={handleSubmitLogin}>Login</Button>
          </Col>

          <Col className={"col-md-6 signupBox"}>
            <h2>Sign Up</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="email" onChange={handleCreateUserInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="username" placeholder="username" onChange={handleCreateUserInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" type="username" placeholder="first name" onChange={handleCreateUserInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" type="username" placeholder="last name" onChange={handleCreateUserInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="password" onChange={handleCreateUserInputChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="confirmPassword" type="password" placeholder="confirm password" onChange={listenConfirmPassword} />
              </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Sign Up</Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;