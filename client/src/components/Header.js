import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";

class Header extends Component {
  onLogout = () => {
    this.props.logout();
  };
  render() {
    const { token } = this.props.user;
    return (
      <div>
        <Grid>
          <Grid.Row className="header">
            <Grid.Column width={4} floated="right">
              {token ? (
                <span className="logout-link" onClick={this.onLogout}>
                  Logout
                </span>
              ) : (
                <span>
                  <Link to="/login">Login</Link> |
                  <Link to="/signup">Signup</Link>
                </span>
              )}
              |<Link to="/dictionary">Dictionary</Link> |
              <Link to="/repeat">Repeat</Link> |
              <Link to="/dashboard">Dashboard</Link> |
              <Link to="/forgot_password">Forgot</Link> |
              <Link to="/reset_password">Reset </Link> |
              <Link to="/">Home</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({
    user
  }),
  { logout }
)(Header);
