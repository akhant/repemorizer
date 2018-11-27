import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Table, Button, Icon } from "semantic-ui-react";
import * as actions from "../actions";
import { STAGE } from "../constants";

export class Dictionary extends Component {
  componentDidMount = () => {
    this.props.getDictionary();
    this.props.getWordsToRepeat();
  };

  componentWillUnmount = () => {
    this.props.checkWordsToRepeat();
  };

  updateNextRepeatIn = () => {
    this.props.checkWordsToRepeat();
  };

  onRemoveClick = _id => () => this.props.removeText(_id);

  renderAddTime = time => {
    if (!time) return "";
    const t = new Date(time);
    return `${t.toLocaleDateString()} at ${t.toLocaleTimeString()}`;
  };

  renderNextRepeatIn = (lastRepeat, stage, isRepeatTime) => {
    if (isRepeatTime) return "Ready to repeat";
    const s = Math.floor(
      (Date.parse(lastRepeat) + STAGE[stage] - Date.now()) / 1000
    );

    if (s > 0) {
      return this.renderTime(s);
    } else {
      this.props.checkWordsToRepeat();
      return "Ready to repeat";
    }
  };

  renderTime = time => {
    let S = `${time % 60} sec `;
    let D = time < 86400 ? "" : `${~~(time / 86400)} d `;
    let H = time < 3600 ? "" : `${~~(time / 3600)} h `;
    let M = time < 60 ? "" : `${~~(time / 60)} min `;

    return (
      <div className="add-time">
        {D} {H} {M} {S}
      </div>
    );
  };

  renderTable = () => {
    return (
      <Table textAlign="center" celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Text</Table.HeaderCell>
            <Table.HeaderCell>Translation</Table.HeaderCell>
            <Table.HeaderCell>Stage</Table.HeaderCell>
            <Table.HeaderCell>Time added</Table.HeaderCell>
            <Table.HeaderCell>
              Next repeat in{" "}
              <Button onClick={this.updateNextRepeatIn}>Update</Button>
            </Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.dictionary.map(
            ({
              text,
              translation,
              _id,
              addTime,
              stage,
              lastRepeat,
              isRepeatTime
            }) => (
              <Table.Row key={_id}>
                <Table.Cell>{text}</Table.Cell>
                <Table.Cell>{translation}</Table.Cell>
                <Table.Cell width={1}>{stage}</Table.Cell>
                <Table.Cell width={2}>{this.renderAddTime(addTime)}</Table.Cell>
                <Table.Cell width={2}>
                  {this.renderNextRepeatIn(lastRepeat, stage, isRepeatTime)}
                </Table.Cell>
                <Table.Cell width={1}>
                  <Icon
                    name="x"
                    className="dictionary__button_remove"
                    onClick={this.onRemoveClick(_id)}
                    color="red"
                  />
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    );
  };

  render() {
    const { dictionary, words } = this.props;
    if (!dictionary.length)
      return (
        <div className="empty-message">
          There is no words in your dictionary yet
        </div>
      );
    return (
      <div className="dictionary">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>Dictionary</h1>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <div>Words in dictionary: {dictionary.length}</div>
              <div>Ready to repeat: {words.length}</div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{this.renderTable()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Dictionary.propTypes = {
  dictionary: PropTypes.array,
  words: PropTypes.array
};

export default connect(
  ({ dictionary, words }) => ({
    dictionary,
    words
  }),
  { ...actions }
)(Dictionary);
