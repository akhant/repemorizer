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

  nextWord = () => {
    this.props.getWordsToRepeat();
  };

  showResult = (_id, success) => {
    this.props.nextStage(_id, success);
  };

  render() {
    const { words } = this.props;

    return (
      <div>
        <Grid className="repeat-page">
          <Grid.Row centered>
            <Grid.Column>
              <h1>Memory check!</h1>
              <div className="repeat__list">
                {words.length ? (
                  <Word
                    text={words[0].text}
                    translation={words[0].translation}
                    _id={words[0]._id}
                    key={words[0]._id}
                    showResult={this.showResult}
                    nextWord={this.nextWord}
                  />
                ) : (
                  <div className="empty-message">
                    There is no words to repeat
                  </div>
                )}
              </div>
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
