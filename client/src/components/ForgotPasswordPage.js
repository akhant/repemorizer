import React, { PureComponent } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { isEmail } from "validator";
import { forgotPassword, clearMessage } from "../actions";

class ForgotPasswordPage extends PureComponent {
  state = {
    data: {
      email: ""
    },
    error: {
      email: ""
    }
  };

  componentDidUpdate = () => {
    const { history, messages } = this.props;
    if (messages.success) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  };

  componentWillUnmount = () => {
    this.props.clearMessage();
  };

  emailHandler = e => {
    this.setState({
      data: {
        email: e.target.value
      }
    });
  };

  onSubmit = e => {
    const { data } = this.state;
    this.setState(
      {
        error: {}
      },
      () => {
        if (this.validate(data)) {
          this.props.forgotPassword(data);
        }
      }
    );
  };

  validate = data => {
    const error = {};

    if (!isEmail(data.email)) {
      error.email = "Not valid email";
    }

    this.setState({
      error: { ...error }
    });

    return !error.email;
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
            {error.email && <Message negative>{error.email}</Message>}

            <Header as="h2" color="teal" textAlign="center">
              Forgot password
            </Header>
            <Form onSubmit={this.onSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.emailHandler}
                  value={data.email}
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
  ({ messages }) => ({ messages }),
  { forgotPassword, clearMessage }
)(ForgotPasswordPage);
