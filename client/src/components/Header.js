import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";

class Header extends Component {
  state = {
    path: ""
  };
  onLogout = () => {
    this.props.logout();
  };

  renderColorStyle = () => {
    return { color: "#fff " };
  };

  render() {
    const { token } = this.props.user;

    return (
      <Grid>
        <Grid.Row className="header">
          <Grid.Column
            mobile={16}
            tablet={9}
            computer={7}
            largeScreen={6}
            widescreen={4}
            floated="right"
          >
            {token ? (
              <div
                role="button"
                style={this.renderColorStyle()}
                className="logout-link"
                onClick={this.onLogout}
              >
                Logout
              </div>
            ) : (
              <span style={{ color: "#474749" }}>
                <Link style={this.renderColorStyle()} to="/login">
                  Login
                </Link>{" "}
                |
                <Link style={this.renderColorStyle()} to="/signup">
                  {" "}
                  Signup
                </Link>
              </span>
            )}
            |{" "}
            <Link style={this.renderColorStyle()} to="/dashboard">
              Dashboard
            </Link>{" "}
            |
            <Link style={this.renderColorStyle()} to="/dictionary">
              Dictionary
            </Link>{" "}
            |
            <Link style={this.renderColorStyle()} to="/repeat">
              Repeat
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  ({ user }) => ({
    user
  }),
  { logout }
)(Header);
