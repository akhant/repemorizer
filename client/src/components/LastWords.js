import React, { Component, Fragment } from "react";


export class LastWords extends Component {
  render() {
    const { dictionary } = this.props;
    return (
      <Fragment>
        <div className="last-words">
          <div className="card">
            <div className="card__header">
              <h2>Last words</h2>
            </div>
            <div className="card__body">
              {dictionary.map(({ text, translation, _id }) => (
                <p key={_id}>{`${text} => ${translation}`}</p>
              ))}
            </div>
          </div>

          <div />
        </div>
        
      </Fragment>
    );
  }
}

export default LastWords;
