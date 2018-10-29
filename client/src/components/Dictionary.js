import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Table, Button } from "semantic-ui-react";
import * as actions from "../actions";
import { STAGE } from "../constants";
import PropTypes from 'prop-types'



export class Dictionary extends Component {
  componentDidMount = () => {
    this.props.getDictionary();
  };

  componentWillUnmount = () => {
    this.props.checkWordsToRepeat();
  }
  

  onRemoveClick = e => {
    this.props.removeText(e.target.id);
  };
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
    //return s > 0 ? this.renderTime(s) : "Ready to repeat";
    if (s>0) {
      return this.renderTime(s)
    } else {
      this.props.checkWordsToRepeat();
      return "Ready to repeat"
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
            <Table.HeaderCell>Time added</Table.HeaderCell>
            <Table.HeaderCell>Stage</Table.HeaderCell>
            <Table.HeaderCell>Next repeat in</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.dictionary.map(
            ({ text, translation, _id, addTime, stage, lastRepeat, isRepeatTime }) => (
              <Table.Row key={_id}>
                <Table.Cell>{text}</Table.Cell>
                <Table.Cell>{translation}</Table.Cell>
                <Table.Cell width={2}>{this.renderAddTime(addTime)}</Table.Cell>
                <Table.Cell width={1}>{stage}</Table.Cell>
                <Table.Cell width={2}>
                  {this.renderNextRepeatIn(lastRepeat, stage, isRepeatTime)}
                </Table.Cell>
                <Table.Cell width={1}>
                  <Button onClick={this.onRemoveClick} color="red" id={_id}>
                    [X]
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    );
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>Dictionary</h1>
              {this.renderTable()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Dictionary.propTypes = {
  dictionary: PropTypes.array,
}


export default connect(
  ({ dictionary }) => ({
    dictionary
  }),
  { ...actions }
)(Dictionary);
