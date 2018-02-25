import React, {Component} from 'react';
import {dispatchSet, watch} from 'redux-easy';
import './card.css';

const greetingMap = {
  Birthday: 'Happy Birthday',
  Christmas: 'Merry Christmas',
  'Valentine\'s Day': 'Happy Valentine\'s Day'
};

const imageMap = {
  Birthday: 'birthday.jpg',
  Christmas: 'santa.jpg',
  'Valentine\'s Day': 'valentine.png'
};

class Card extends Component {

  showForm = () => dispatchSet('show', 'form');

  render() {
    const {message, name, occasion} = this.props;

    const imageUrl = 'images/' + imageMap[occasion];
    const greeting = `${greetingMap[occasion]} ${name}!`;

    return (
      <div className="card">
        <img src={imageUrl} alt="card" />
        <div className="greeting">{greeting}</div>
        <div className="message">{message}</div>
        <button onClick={this.showForm}>Back</button>
      </div>
    );
  }
}

export default watch(Card, {
  message: 'message',
  name: 'name',
  occasion: 'occasion'
});

