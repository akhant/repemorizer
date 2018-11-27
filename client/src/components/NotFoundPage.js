import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NotFoundPage extends Component {
  render() {
    return (
      <div>
        This page doesn't exist
        <hr />
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    );
  }
}

export default NotFoundPage;
