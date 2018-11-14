import React from "react";
import { Grid } from "semantic-ui-react";
import Canvas from "./graphic/Canvas";

const HomePage = () => (
  <div className="home-page">
    <Grid>
      <Grid.Row className="home-page__header">
        <Grid.Column>
          <h1>Repemorizer</h1>

          <h3>Translate, repeat and memorize new words</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Canvas />
      </Grid.Row>
    </Grid>
  </div>
);

export default HomePage;
