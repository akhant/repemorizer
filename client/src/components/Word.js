import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

export class Word extends Component {
  state = {
    flag: "",
    hidden: true
  };

  componentDidMount = () => {
    this.setState({
      flag: Math.random() > 0.5
    });
  };

  handleClick = success => () => {
    this.setState({
      hidden: false
    });
    this.props.showResult(this.props._id, success);
  };

  render() {
    const { flag, hidden } = this.state;
    const { text, translation } = this.props;
    return (
      <div className="word">
        <div className="word__text">
          <span className="word__text_one"> {flag ? text : translation}</span>
          <span className="word__text_translate" hidden={hidden}>
            {" "}
            - {flag ? translation : text}
          </span>
        </div>

        {hidden && (
          <div className="word__buttons">
            <Button onClick={this.handleClick(true)}>I know</Button>
            <Button onClick={this.handleClick(false)}>Remind</Button>
          </div>
        )}
        {!hidden && (
          <Button onClick={this.props.nextWord} className="word__button_next">
            Next word
          </Button>
        )}
      </div>
    );
  }
}

Word.propTypes = {
  text: PropTypes.string,
  translation: PropTypes.string,
  id: PropTypes.string,
  nextStage: PropTypes.func
};
export default Word;
