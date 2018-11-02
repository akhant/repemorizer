import React, { Component } from "react";
import { connect } from "react-redux";

class ConfirmationPage extends Component {
  componentDidMount() {}
  render() {
    if (this.props.confirmed) {
      return <div>You've already confirmed your email. Enjoy the app.</div>;
    } else if (this.props.isAuthenticated) {
      return (
        <div>
          Please confirm your email to get access to dictionary and repetition.
        </div>
      );
    } else {
      return <div>Please sign up or log in</div>;
    }
  }
}
function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
    isAuthenticated: !!state.user.token
  };
}
export default connect(mapStateToProps)(ConfirmationPage);
