import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      phone: '',
      budget: '',
      website: '',
      features: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createForm = this.createForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name + ': ' + e.target.value + ' sent!!');
    this.setState({
      email: '',
      name: '',
      message: '',
      phone: '',
      budget: '',
      website: '',
      features: '',
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
      this.handleSubmit(e);
    }
  }
  createForm() {
    let formBody;
    switch (this.props.form) {
      case 'Select an option':
        formBody = null;
        break;
      case 'Leave a message':
        formBody = (
          <div>
            <label>Name:</label>
            <input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Phone Number:</label>
            <input
              type='tel'
              name='phone'
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </div>
        );
        break;
      case 'Ask for a quote':
        formBody = (
          <div>
            <label>Name:</label>
            <input
              type='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Phone Number:</label>
            <input
              type='tel'
              name='phone'
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <label>What is your Budget?</label>
            <input
              type='text'
              name='budget'
              value={this.state.budget}
              onChange={this.handleChange}
            />
            <label>What is the domain name (if applicable)?</label>
            <input
              type='text'
              name='website'
              value={this.state.website}
              onChange={this.handleChange}
            />
            <label>What features will you need? (CMS, Ecommerce, etc.)</label>
            <input
              type='text'
              name='features'
              value={this.state.features}
              onChange={this.handleChange}
            />
            <label>Tell me more about your site</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </div>
        );
        break;
      case 'Make a suggestion':
        formBody = (
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Suggestion:</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </div>
        );
        break;
      default:
      console.log('No form chosen');
    }
    return formBody;
  }
  render() {
    return (
      <form
        onKeyUp={this.handleKeyUp}
        onSubmit={this.handleSubmit}
      >
        {this.createForm()}
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  form: PropTypes.string.isRequired,
};

// console.log(`%c ${this.state.email} sent`, `${consoleStyle}`);
// fetch(this.state.appUrl, {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: {
//     email: this.state.email,
//     name: this.state.name,
//     message: this.state.message,
//   // then continue this with the other inputs, such as email body, etc.
//   },
//   mode: 'cors',
// })
// .then((response) => {
//   console.log(`%c Response: ${response}`, `${consoleStyle}`);
//   response.json()
// })
// .then((responseJson) => {
//   if (responseJson.success) {
//     this.setState({
//       formSent: true,
//     });
//   } else {
//     this.setState({
//       formSent: false,
//     });
//   }
// })
// .catch((error) => {
//   console.error(error)
// })
