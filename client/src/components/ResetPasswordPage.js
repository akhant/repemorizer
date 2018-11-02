import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

import { connect } from "react-redux";
import { resetPassword } from "../actions";

class ResetPasswordPage extends Component {
  state = {
    data: {
      password1: "",
      password2: ""
    }
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
    //TODO: verify data
    //if pass1 === pass2
    console.log(this.props.match.params);
    this.props.resetPassword({
      token: this.props.match.params.token,
      password: this.state.data.password1
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
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
  ({ user }) => ({ user }),
  { resetPassword }
)(ResetPasswordPage);
