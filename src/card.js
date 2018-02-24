import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dispatchSet} from 'redux-easy';
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

function mapState(state) {
  const {message, name, occasion} = state;
  return {message, name, occasion};
}

export default connect(mapState)(Card);
