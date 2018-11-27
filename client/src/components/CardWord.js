import React from "react";
import { Icon } from "semantic-ui-react";

const CardWord = props => {
  const { text, translation, _id } = props;
  return (
    <div className="card__word">
      <div className="card__word_text">
        <span className="lang1">{text}</span>{" "}
        <Icon color="black" name="caret right" />{" "}
        <span className="lang2">{translation}</span>
      </div>
      <Icon
        name="x"
        className="card__word_button"
        onClick={props.onRemoveText(_id)}
        color="red"
      />
    </div>
  );
};

export default CardWord;
