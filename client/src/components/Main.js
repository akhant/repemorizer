import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Form, Button, Icon, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import * as actions from "../actions";
import Card from "./Card";
import { languages } from "../constants";

//TODO: protect form
//TODO: separate the component
class Main extends Component {
  state = {
    formValue: "",
    translation: "",
    lang: {
      from: "en",
      to: "ru"
    },
    word: "",
    hidden: false
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
          translation: dictionary[dictionary.length - 1].translation,
          word: dictionary[dictionary.length - 1]
        });
      }
    }
  }

  componentDidMount = () => {
    const { checkWordsToRepeat, getWordsToRepeat } = this.props;
    checkWordsToRepeat();

    getWordsToRepeat();
    if (window.innerWidth < 768) {
      this.setState({
        hidden: true
      })
    }
  };

  onChangeInput = e => {
    this.setState({
      formValue: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { translateRequest } = this.props;
    const { formValue, lang } = this.state;
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
    translateRequest(formValue, lang);
  };

  onSelectLanguage = (e, { value, name }) => {
    this.setState({
      lang: {
        ...this.state.lang,
        [name]: value
      }
    });
  };

  turnLang = () => {
    this.setState(prevState => ({
      lang: {
        from: prevState.lang.to,
        to: prevState.lang.from
      }
    }));
  };

  renderTranslatedFromAnotherLanguage = () => {
    const { word, lang } = this.state;
    if (word && word.langFrom !== lang.from) {
      return (
        //render a name of Language by using a language code
        <div className="message_translated-from">
          Translated from{" "}
          {_.find(languages, o => o.value === word.langFrom).text}
        </div>
      );
    }
  };

  render() {
    const { formValue, translation, lang, hidden } = this.state;
    const { dictionary, words } = this.props;

    return (
      <Grid className="main-page">
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={9}
            computer={11}
            largeScreen={12}
            widescreen={12}
            style={{ paddingTop: "70px" }}
          >
            <Form onSubmit={this.onSubmit} method="POST">
              <Form.Group className="lang">
                <Dropdown
                  search
                  selection
                  onChange={this.onSelectLanguage}
                  placeholder="From"
                  value={lang.from}
                  name="from"
                  options={languages}
                />
                <Icon
                  onClick={this.turnLang}
                  name="arrows alternate horizontal"
                  size="large"
                  className="turn-lang-icon"
                />
                <Dropdown
                  search
                  selection
                  onChange={this.onSelectLanguage}
                  placeholder="To"
                  name="to"
                  value={lang.to}
                  options={languages}
                />
              </Form.Group>
              <Form.Group widths="equal" inline className="main__input">
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
              <div className="main__output">
                <div className="main__output_translation">{translation}</div>
                {this.renderTranslatedFromAnotherLanguage()}
              </div>
            </Form>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={7}
            computer={5}
            largeScreen={4}
            widescreen={4}
          >
            <Button
              className="main__button-turn"
              onClick={() => {
                this.setState(prevState => ({
                  hidden: !prevState.hidden
                }));
              }}
            >
              Last words
            </Button>
            {!hidden && <Card dictionary={dictionary} />}
          </Grid.Column>
        </Grid.Row>

        {words.length ? (
          <div className="main__link_repeat">
            <span>You have {words.length} words to repeat</span>
            <Icon name="long arrow alternate right" />
            <Link to="/repeat"> Repeat words</Link>
          </div>
        ) : (
          <div />
        )}
      </Grid>
    );
  }
}

Main.propTypes = {
  dictionary: PropTypes.array,
  getWordsToRepeat: PropTypes.func,
  getFifty: PropTypes.func,
  checkWordsToRepeat: PropTypes.func,
  words: PropTypes.array
};

export default connect(
  ({ dictionary, words }) => ({
    dictionary,
    words
  }),
  { ...actions }
)(Main);
