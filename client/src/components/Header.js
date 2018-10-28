import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row className="header">
            <Grid.Column  width={2} floated="right">
              <Link to="/login">Login</Link> |
              <Link to="/signup">Signup</Link> |
              <Link to="/">Main</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
