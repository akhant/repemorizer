import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

import { connect } from "react-redux";
import { forgotPassword } from "../actions";

class ForgotPasswordPage extends Component {
  state = {
    data: {
      email: ""
    }
  };

  emailHandler = e => {
    this.setState({
      data: {
        email: e.target.value
      }
    });
  };

  onSubmit = e => {
    //TODO: verify data
    
    this.props.forgotPassword(this.state.data);
  };

  render() {
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Forgot password
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.emailHandler}
                  value={this.state.data.email}
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                />

                <Button type="submit" color="teal" fluid size="large">
                  Send confirmation email!
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
  { forgotPassword }
)(ForgotPasswordPage);
