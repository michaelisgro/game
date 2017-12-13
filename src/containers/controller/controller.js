import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './controller.css';

import Ingredient from './components/ingredient/ingredient';
import Smear from './components/smear/smear';
import Compliment from './components/compliment/compliment';

class Controller extends Component {
  render() {
    return (
      <div className="controllerContainer">
        <Ingredient />
        <Smear />
        <Compliment />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // increment,
  // incrementAsync,
  // decrement,
  // decrementAsync,
  // changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller)
