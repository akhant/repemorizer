import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";

class Header extends Component {
  onLogout = () => {
    this.props.logout();
  };

  renderColorStyle = () => {
    return window.location.pathname === "/"
      ? { color: "#fff " }
      : { color: "#0074E8" };
  };

  render() {
    const { token } = this.props.user;
    //console.log(window.location);

    return (
      <div>
        <Grid>
          <Grid.Row
            style={
              window.location.pathname === "/"
                ? { backgroundColor: "#0074E8", position: "absolute", zIndex: 2 }
                : { backgroundColor: "#fff" }
            }
            className="header"
          >
            <Grid.Column
              widescreen={5}
              mobile={16}
              /* tablet={7}  width={5} */ floated="right"
            >
              {token ? (
                <div
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
