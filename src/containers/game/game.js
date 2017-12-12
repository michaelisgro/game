import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './game.css';

import Header from '../header/header';
import Customer from '../customer/customer';
import Controller from '../controller/controller';

import {createGame} from '../../modules/GameEngine';

class Game extends Component {
  constructor() {
    super();

    this.gameEngine = createGame({timer: 300, numberOfOrders: 4});
  }

  render() {
    console.log('==> this.gameEngine:', this.gameEngine);
    
    return (
      <div>
        <h1>Game</h1>
        <Header />
        <Customer />
        <Controller />
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
)(Game)