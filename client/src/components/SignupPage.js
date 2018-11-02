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
import { signup } from "../actions";

class SignupPage extends Component {
  state = {
    data: {
      email: "",
      password: "",
      username: ""
    }
  };

  usernameHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        username: e.target.value
      }
    });
  };

  emailHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        email: e.target.value
      }
    });
  };

  passwordHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        password: e.target.value
      }
    });
  };

  onSubmit = e => {
    //TODO: verify data
    this.props.signup(this.state.data);
  };

  render() {
    return (
      <div className="signup-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Sign up
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.usernameHandler}
                  value={this.state.data.username}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Your name"
                />
                <Form.Input
                  onChange={this.emailHandler}
                  value={this.state.data.email}
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  onChange={this.passwordHandler}
                  value={this.state.data.password}
                  fluid
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
  null,
  { signup }
)(SignupPage);
