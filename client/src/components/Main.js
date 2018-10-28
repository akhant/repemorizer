import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";


class Main extends Component {
  state = {
    formValue: "",
    translation: ""
  };

  
  

  componentDidUpdate(prevProps) {
    const {dictionary} = this.props
    if (this.state.formValue && (dictionary.length !== prevProps.dictionary.length)) {
      this.setState({
        translation: dictionary[dictionary.length - 1].translation
      });
    }
  }
  componentDidMount = () => {
    
    this.props.getDictionary()
  };

  onChangeInput = e => {
    this.setState({
      formValue: e.target.value
    });
    
  };
  onSubmit = () => {
    this.props.translateRequest(this.state.formValue);
    
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
              <h2>Dictionary</h2>
              <div>
                {this.props.dictionary.map(({ text, translation, _id }) => (
                  <p key={_id}>{`${text} - ${translation}`}</p>
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
  ({ dictionary }) => ({
    dictionary
  }),
  { ...actions }
)(Main);
