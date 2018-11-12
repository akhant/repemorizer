import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Form, Button, Icon } from "semantic-ui-react";
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
    if (formValue.length > 300) {
      return this.setState(
        prevState => ({
          formValue: prevState.formValue.slice(0, 300)
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
          <Grid.Column mobile={16} tablet={9}  computer={11} largeScreen={12} widescreen={12}  style={{ paddingTop: "70px" }}/*  width={12} */>
            <Form onSubmit={this.onSubmit} method="POST">
              <Form.Group widths="equal" inline>
                <Form.Field
                  className="main__input_text"
                  value={formValue}
                  onChange={this.onChangeInput}
                  control="input"
                  placeholder="Enter word to translate"
                />

                <Button type="sumbit" className="main__btn_translate" primary>
                  Translate
                </Button>
              </Form.Group>

              <div className="main__output_translation">{translation}</div>
            </Form>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={7}  computer={5} largeScreen={4} widescreen={4}   >
            <LastWords dictionary={dictionary} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {words.length ? (
              <div className="main__link_repeat">
                <span>
                  You have {this.props.words.length} words to repeat
                </span>
                <Icon name="long arrow alternate right" />
                <Link to="/repeat"> Repeat words</Link>
              </div>
            ) : (
              <div />
            )}
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
