import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import * as actions from "../actions";
import Word from "./Word";

class RepeatPage extends Component {
  componentDidMount = () => {
    this.props.getWordsToRepeat();
  };

  showResult = (_id, success) => {
    this.props.nextStage(_id, success);
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>Memory check!</h1>
              {this.props.words.length ? (
                this.props.words.map(({ text, translation, _id }) => {
                  return (
                    <Word
                      text={text}
                      translation={translation}
                      _id={_id}
                      key={_id}
                      showResult={this.showResult}
                    />
                  );
                })
              ) : (
                <div>There is no words to repeat</div>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

RepeatPage.propTypes = {
  words: PropTypes.array,
  getWordsToRepeat: PropTypes.func,
  nextStage: PropTypes.func
};

export default connect(
  ({ words }) => ({
    words
  }),
  { ...actions }
)(RepeatPage);
