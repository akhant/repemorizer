import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment, Message } from "semantic-ui-react";

import { connect } from "react-redux";
import { resetPassword, clearMessage } from "../actions";

class ResetPasswordPage extends Component {
  state = {
    data: {
      password1: "",
      password2: ""
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
  this.props.clearMessage()
}

  passwordHandler = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    //TODO: verify data
    //if pass1 === pass2

    this.props.resetPassword({
      token: this.props.match.params.token,
      password: this.state.data.password1
    });
  };

  render() {
    const { messages } = this.props;

    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {messages.message && <Message color={this.props.messages.success ? "green" : "red"}>{messages.message}</Message>}

            <Header as="h2" color="teal" textAlign="center">
              Reset password
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.passwordHandler}
                  value={this.state.data.password}
                  fluid
                  name="password1"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  onChange={this.passwordHandler}
                  value={this.state.data.password}
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
