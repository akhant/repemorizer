import React, { Component } from 'react'
import { connect } from 'react-redux'
import confirm from '../actions'

class ConfirmationPage extends Component {
    componentDidMount() {
        console.log(this.props.match)
        //this.props.confirm(this.props.match.params.token)
          
      }
  render() {
    return (
      <div>
        Message has send to your email adress.
        Please confirm your email to get access to dictionary and repetition. 
      </div>
    )
  }
}

export default connect(null, {confirm})(ConfirmationPage)
