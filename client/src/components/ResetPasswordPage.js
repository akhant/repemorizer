import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import { isAlphanumeric } from "validator";
import { connect } from "react-redux";
import { resetPassword, clearMessage } from "../actions";

class ResetPasswordPage extends Component {
  state = {
    data: {
      password1: "",
      password2: ""
    },
    error: {
      password: ""
    }
  };

  componentDidUpdate = () => {
    if (this.props.messages.success) {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 3000);
    }
  };
  componentWillUnmount = () => {
    this.props.clearMessage();
  };

  passwordHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    this.setState(
      {
        error: {}
      },
      () => {
        if (this.validate(this.state.data)) {
          this.props.resetPassword({
            token: this.props.match.params.token,
            password: this.state.data.password1
          });
        }
      }
    );
  };

  validate = data => {
    const error = {};

    if (data.password1 !== data.password2) {
      error.password = "Not equal passwords";
    }
    if (
      !isAlphanumeric(data.password1) ||
      !isAlphanumeric(data.password2) ||
      data.password1.length < 4 ||
      data.password1.length > 16 ||
      data.password2.length < 4 ||
      data.password2.length > 16
    ) {
      error.password = "Not valid password";
    }

    this.setState({
      error: { ...error }
    });

    return !error.password;
  };

  render() {
    const { messages } = this.props;
    const { error, data } = this.state;
    return (
      <div className="login-form">
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
            {error.password && <Message negative>{error.password}</Message>}
            <Header as="h2" color="teal" textAlign="center">
              Reset password
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.passwordHandler}
                  value={data.password1}
                  fluid
                  name="password1"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  onChange={this.passwordHandler}
                  value={data.password2}
                  fluid
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button type="submit" color="teal" fluid size="large">
                  Reset password!
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ user, messages }) => ({ user, messages }),
  { resetPassword, clearMessage }
)(ResetPasswordPage);
