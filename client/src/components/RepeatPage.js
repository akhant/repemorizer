import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Table, Button } from "semantic-ui-react";
import {getWordsToRepeat} from "../actions";

export class RepeatPage extends Component {
  /* componentDidMount = () => {
    this.props.getWordsToRepeat();
  }; */
 render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>Memory check!</h1>
              <h2>Words for repetition</h2>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  ({ dictionary }) => ({
    dictionary
  }),
  { getWordsToRepeat }
)(RepeatPage);
