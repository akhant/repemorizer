import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Table, Button } from "semantic-ui-react";
import {getDictionary, removeText} from "../actions";

export class Dictionary extends Component {
  componentDidMount = () => {
    this.props.getDictionary();
  };

  onRemoveClick = (e) => {
      
      this.props.removeText(e.target.id)
  }
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
            ({ text, translation, _id, addedTime, stage }) => (
              <Table.Row key={_id}>
                <Table.Cell >{text}</Table.Cell>
                <Table.Cell>{translation}</Table.Cell>
                <Table.Cell width={2}>{addedTime}</Table.Cell>
                <Table.Cell width={1}>{stage}</Table.Cell>
                <Table.Cell width={2}>2h53m</Table.Cell>
                <Table.Cell width={1}>
                  <Button onClick={this.onRemoveClick} color="red" id={_id}>[X]</Button>
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

export default connect(
  ({ dictionary }) => ({
    dictionary
  }),
  { getDictionary, removeText }
)(Dictionary);
