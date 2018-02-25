import React, {Component} from 'react';
import {
  dispatch,
  dispatchSet,
  //Checkboxes,
  Input,
  //RadioButtons,
  Select,
  TextArea
} from 'redux-easy';
import './form.css';

class Form extends Component {
  shout = () => dispatch('shout');

  showCard = () => dispatchSet('show', 'card');

  render() {
    /*
    const checkboxList = [
      {text: 'Red', path: 'color.red'},
      {text: 'Green', path: 'color.green'},
      {text: 'Blue', path: 'color.blue'}
    ];
    const radioButtonList = [
      {text: 'Chocolate', value: 'choc'},
      {text: 'Strawberry', value: 'straw'},
      {text: 'Vanilla', value: 'van'}
    ];
    */

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
        {/*
        <Checkboxes className="colors" list={checkboxList} />
        <RadioButtons
          className="flavor"
          list={radioButtonList}
          path="favoriteFlavor"
        />
        */}
      </div>
    );
  }
}

export default Form;
