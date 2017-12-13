import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './prepStation.css';

import Ingredients from './components/ingredients/ingredients';
import Smear from './components/smear/smear';
import Compliment from './components/compliment/compliment';


function PrepStation({ addIngredient, ingredients, prepingOrder }) {
  return (
    <div className="controllerContainer">
      <Ingredients addIngredient={addIngredient} items={ingredients} />
      <Smear prepingOrder={prepingOrder} />
      <Compliment />
    </div>
  );
};


export default PrepStation;
