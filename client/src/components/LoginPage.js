import React, { PureComponent } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { isEmail, isAlphanumeric } from "validator";
import { connect } from "react-redux";
import { login, clearMessage, logout } from "../actions";
import { isError } from "../utils";

class LoginPage extends PureComponent {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {
      email: "",
      password: ""
    }
  };

  componentDidMount = () => {
    this.props.logout();
  };

  componentWillUnmount = () => {
    this.props.clearMessage();
  };

  componentDidUpdate = () => {
    const { history, messages } = this.props;
    if (messages.success) {
      this.timer = setTimeout(() => {
        history.push("/dashboard");
      }, 2000);
    }
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
        if (this.validate(data)) this.props.login(data);
      }
    );
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email) || !data.email) {
      errors.email = "Not valid email";
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
            {isError(errors) &&
              err.map((val, i) => (
                <Message key={i} negative>
                  {val}
                </Message>
              ))}

            <Header as="h2" color="teal" textAlign="center">
              Log in
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
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
  { login, clearMessage, logout }
)(LoginPage);
