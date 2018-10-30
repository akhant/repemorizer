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
  handleClick = (success) => () => {
    this.setState({
      hidden: false
    });
    
    this.props.showResult(this.props._id, success)
  };

  render() {
    const { flag, hidden } = this.state;
    const { text, translation } = this.props;
    return (
      <div>
          <span> {flag ? text : translation}</span>
          <span hidden={hidden}> - {flag ? translation : text}</span>
        
        {hidden && <div>
            <Button onClick={this.handleClick(true)}>I know</Button>
            <Button onClick={this.handleClick(false)}>Remind</Button>
        </div>}
        <hr/>
      </div>
    );
  }
}

Word.propTypes = {
  text: PropTypes.string,
  translation: PropTypes.string,
  id: PropTypes.string,
  nextStage: PropTypes.func,
};
export default Word;
