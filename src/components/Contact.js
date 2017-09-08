import React, { Component } from 'react';

import '../styles/contact.css';

// Component Imports
import Dropdown from './contact/Dropdown';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      options: ['Select an option', 'Leave a message', 'Ask for a quote', 'Make a suggestion'],
    };
  }
  render() {
    return (
      <div className="message">
        <Dropdown
          options={this.state.options}
        />
      </div>
    );
  }
}

export default Contact;
