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
import { login, clearMessage } from "../actions";

class LoginPage extends Component {
  state = {
    data: {
      email: "",
      password: ""
    }
  };  

    componentWillUnmount = () => {
    this.props.clearMessage()
  }

  /* componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.user !== this.props.user)
      this.props.history.push("/dashboard");
  }; */

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
    this.props.login(this.state.data);
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
              Log in
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
                  LOG IN!
                </Button>
              </Segment>
            </Form>
            <Message>
              <Link to="/forgot_password">forgot password?</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ user, messages }) => ({ user, messages }),
  { login, clearMessage }
)(LoginPage);
