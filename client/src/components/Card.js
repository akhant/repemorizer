import React from "react";
import { connect } from "react-redux";
import { removeText } from "../actions";

import CardWord from "./CardWord";

const Card = props => {
  function onRemoveText(_id) {
    return () => {
      props.removeText(_id);
    };
  }
  const { dictionary } = props;
  return (
    <div className="last-words">
      <div className="card">
        <div className="card__header">
          <h2>Last words</h2>
        </div>
        <div className="card__body">
          {dictionary.map(word => (
            <CardWord onRemoveText={onRemoveText} key={word._id} {...word} />
          ))}
        </div>
      </div>

      <div />
    </div>
  );
};

export default connect(
  null,
  { removeText }
)(Card);
