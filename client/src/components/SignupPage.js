import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isEmail, isAlphanumeric } from "validator";
import { signup, clearMessage, logout } from "../actions";
import { isError } from "../utils";

class SignupPage extends Component {
  state = {
    data: {
      email: "",
      password: "",
      password2: "",
      username: ""
    },
    errors: {
      email: "",
      password: "",
      username: ""
    }
  };

  componentDidMount = () => {
    this.props.logout();
  };

  componentDidUpdate = () => {
    const { history, messages } = this.props;
    if (messages.success) {
      this.timer = setTimeout(() => {
        history.push("/dashboard");
      }, 3000);
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this.timer);
    this.props.clearMessage();
  };

  inputHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    const { data } = this.state;
    this.setState(
      {
        errors: {}
      },
      () => {
        if (this.validate(data)) this.props.signup(data);
      }
    );
  };

  validate = data => {
    const errors = {};
    if (!data.username || !isAlphanumeric(data.username)) {
      errors.username = "Not valid username";
    }
    if (!isEmail(data.email) || !data.email) {
      errors.email = "Not valid email";
    }
    if (data.password !== data.password2) {
      errors.password = "Not equal passwords";
    }
    if (
      !isAlphanumeric(data.password) ||
      data.password.length < 4 ||
      data.password.length > 16
    ) {
      errors.password = "Not valid password";
    }

    this.setState({
      errors: { ...errors }
    });

    return JSON.stringify(errors) === "{}";
  };

  render() {
    const { messages } = this.props;
    const { errors, data } = this.state;
    const err = Object.values(errors);
    return (
      <div className="signup-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {messages.message && (
              <Message color={messages.success ? "green" : "red"}>
                {messages.message}
              </Message>
            )}
            {isError(errors) &&
              err.map(val => (
                <Message key={val} negative>
                  {val}
                </Message>
              ))}
            <Header as="h2" color="teal" textAlign="center">
              Sign up
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.inputHandler}
                  value={data.username}
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Your name"
                />
                <Form.Input
                  onChange={this.inputHandler}
                  value={data.email}
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  onChange={this.inputHandler}
                  value={data.password}
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  onChange={this.inputHandler}
                  value={data.password2}
                  fluid
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button type="submit" color="teal" fluid size="large">
                  SIGN UP!
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have account? <Link to="/login">Log in</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ messages }) => ({ messages }),
  { signup, clearMessage, logout }
)(SignupPage);
