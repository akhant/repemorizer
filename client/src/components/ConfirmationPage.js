import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const renderPage = (isConfirmed, isAuthenticated) => {
  if (isConfirmed) {
    return <div>You've already confirmed your email. Enjoy the app.</div>;
  }
  if (isAuthenticated) {
    return (
      <div>
        Please confirm your email to get access to dictionary and repetition.
        <Link to="/dashboard"> Go to dashboard </Link>
      </div>
    );
  }
  return <div>Please sign up or log in</div>;
};
const ConfirmationPage = ({ isConfirmed, isAuthenticated }) => {
  return <Fragment>{renderPage(isConfirmed, isAuthenticated)}</Fragment>;
};
function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed,
    isAuthenticated: !!state.user.token
  };
}
export default connect(mapStateToProps)(ConfirmationPage);
