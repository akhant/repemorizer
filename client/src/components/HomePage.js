import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ReactCanvas from './graphic/ReactCanvas'
export class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Grid>
          <Grid.Row className="home-page__header">
            <Grid.Column>
              <h1>Repemorizer</h1>

              <h3>Translate, repeat and memorize new words</h3>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <ReactCanvas />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
