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
            <Grid.Column largeScreen={5} tablet={7} mobile={16} width={5} floated="right">
              {token ? (
                <div className="logout-link" onClick={this.onLogout}>
                  Logout 
                </div>
              ) : (
                <span>
                  <Link to="/login">Login</Link> |  
                  <Link to="/signup"> Signup</Link> 
                </span>
              )}
              | <Link to="/dashboard">Dashboard</Link> | 
              <Link to="/dictionary">Dictionary</Link> | 
              <Link to="/repeat">Repeat</Link> 
              
              
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
