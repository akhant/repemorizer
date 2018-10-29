import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Table, Button } from "semantic-ui-react";
import {getWordsToRepeat} from "../actions";

export class RepeatPage extends Component {
  componentDidMount = () => {
    this.props.getWordsToRepeat();
  };
 render() {
     console.log(this.props.words)
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>Memory check!</h1>
              {this.props.words.map(({text,translation,_id}) => {
                  return <p key={_id}>{`${text} - ${translation}`}</p>
              })}
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}



export default connect(
  ({ words }) => ({
    words
  }),
  { getWordsToRepeat }
)(RepeatPage);
