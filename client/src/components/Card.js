import React, { Component } from "react";
import { connect } from "react-redux";
import { removeText, getFifty } from "../actions";

import CardWord from "./CardWord";

class Card extends Component {
  componentDidMount = () => {
    this.props.getFifty();
  };

  onRemoveText = _id => {
    return () => {
      this.props.removeText(_id);
    };
  };

  render() {
    const { dictionary } = this.props;
    return (
      <div className="last-words">
        <div className="card">
          <div className="card__header">
            <h2>Last words</h2>
          </div>
          <div className="card__body">
            {dictionary.map(word => (
              <CardWord
                onRemoveText={this.onRemoveText}
                key={word._id}
                {...word}
              />
            ))}
          </div>
        </div>

        <div />
      </div>
    );
  }
}

export default connect(
  null,
  { removeText, getFifty }
)(Card);
