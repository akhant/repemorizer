import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { translateRequest, addToRepetition } from "../actions";

class Main extends Component {
  state = {
    formValue: "",
    translation: ""
  };

  componentDidUpdate(prevProps) {
    const {words} = this.props
    if (words.length !== prevProps.words.length) {
      this.setState({
        translation: words[words.length - 1].translation
      });
    }
  }
 /*  componentDidMount = () => {
    const { words } = this.props;
    if (words.length) {
      this.setState({
        translation: words[words.length - 1].translation
      });
    }
  }; */

  onChangeInput = e => {
    this.setState({
      formValue: e.target.value
    });
  };
  onSubmit = () => {
    this.props.translateRequest(this.state.formValue);
    //console.log(this.state.formValue)
  };
  addToRepetition = () => {
    this.props.addToRepetition(this.state.formValue);
  };

  render() {
    return (
      <Grid className="main-page">
        <Grid.Row>
          <Grid.Column width={12}>
            <Form onSubmit={this.onSubmit} method="POST">
              <Form.Group widths="equal" inline>
                <Form.Field
                  value={this.state.formValue}
                  onChange={this.onChangeInput}
                  control="textarea"
                  label="Text"
                />

                <Form.Group width={2} style={{ flexDirection: "column" }}>
                  <Button type="sumbit" className="btn" primary>
                    Translate
                  </Button>
                  <Button
                    onClick={this.addToRepetition}
                    className="btn"
                    primary
                  >
                    Translate and add to repetiton
                  </Button>
                </Form.Group>
              </Form.Group>

              <Form.Field
                width={14}
                value={this.state.translation}
                control="textarea"
                label="Translation"
                disabled={true}
              />
            </Form>
          </Grid.Column>
          <Grid.Column width={4}>
            <div>
              <h2>Recently words</h2>
              <div>
                {this.props.words.map(({ text, translation }) => (
                  <p key={text}>{`${text} - ${translation}`}</p>
                ))}
              </div>
            </div>
            <div>
              <h2>Words to repeat</h2>
              <div>
                {this.props.dictionary.map(word => (
                  <p key={word}>{word}</p>
                ))}
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  ({ dictionary, words }) => ({
    dictionary,
    words
  }),
  { translateRequest, addToRepetition }
)(Main);
