import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import LastWords from "./LastWords";

//TODO: protect form
//TODO: separate the component
class Main extends Component {
  state = {
    formValue: "",
    translation: ""
  };

  componentDidUpdate(prevProps) {
    const { dictionary } = this.props;
    if (dictionary) {
      if (
        this.state.formValue &&
        dictionary.length &&
        dictionary.length !== prevProps.dictionary.length
      ) {
        this.setState({
          translation: dictionary[dictionary.length - 1].translation
        });
      }
    }
  }

  componentDidMount = () => {
    const { checkWordsToRepeat, getFifty, getWordsToRepeat } = this.props;
    checkWordsToRepeat();
    getFifty();
    getWordsToRepeat();
  };

  onChangeInput = e => {
    this.setState({
      formValue: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { translateRequest } = this.props;
    const { formValue } = this.state;
    if (!formValue) return;
    if (formValue.length > 10000) {
      return this.setState(
        prevState => ({
          formValue: prevState.formValue.slice(0, 9999)
        }),
        () => {
          translateRequest(formValue);
        }
      );
    }
    translateRequest(formValue);
  };

  render() {
    const { formValue, translation } = this.state;
    const { dictionary, words } = this.props;
    return (
      <Grid className="main-page">
        <Grid.Row>
          <Grid.Column width={12}>
            <Form onSubmit={this.onSubmit} method="POST">
              <Form.Group widths="equal" inline>
                <Form.Field
                  value={formValue}
                  onChange={this.onChangeInput}
                  control="textarea"
                  label="Text"
                />

                <Form.Group width={2} style={{ flexDirection: "column" }}>
                  <Button type="sumbit" className="btn" primary>
                    Translate
                  </Button>
                </Form.Group>
              </Form.Group>

              <Form.Field
                width={14}
                value={translation}
                control="textarea"
                label="Translation"
                disabled={true}
              />
            </Form>
          </Grid.Column>
          <Grid.Column width={4}>
            <LastWords dictionary={dictionary} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <div>
              {words.length ? (
                <div>
                  <span>
                    You have {this.props.words.length} words to repeat ->
                  </span>
                  <Link to="/repeat">Repeat words</Link>
                </div>
              ) : (
                <div>You don't have words to repeat</div>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Main.propTypes = {
  dictionary: PropTypes.array,
  getWordsToRepeat: PropTypes.func,
  getFifty: PropTypes.func,
  checkWordsToRepeat: PropTypes.func
};

export default connect(
  ({ dictionary, words }) => ({
    dictionary,
    words
  }),
  { ...actions }
)(Main);
