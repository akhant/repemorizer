import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ConfirmedRoute = ({ isConfirmed, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isConfirmed ? <Component {...props} /> : <Redirect to="/confirmation" />
    }
  />
);

ConfirmedRoute.propTypes = {
  component: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed
  };
}

export default connect(mapStateToProps)(ConfirmedRoute);
