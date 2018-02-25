import React, { Component } from 'react';
import { dispatch, dispatchSet, Input, Select, TextArea } from 'redux-easy';
import './form.css';

class Form extends Component {
  shout = () => dispatch('shout');

  showCard = () => dispatchSet('show', 'card');

  render() {
    return (
      <div className="form">
        <div className="row">
          <label>Occassion</label>
          <Select path="occasion">
            <option>Birthday</option>
            <option>Christmas</option>
            <option>Valentine's Day</option>
          </Select>
        </div>
        <div className="row">
          <label>Name</label>
          <Input path="name" />
        </div>
        <div className="row">
          <label>Message</label>
          <TextArea path="message" />
          <button onClick={this.shout}>Shout</button>
        </div>
        <div className="row">
          <label />
          <button onClick={this.showCard}>Show Card</button>
        </div>
      </div>
    );
  }
}

export default Form;
