import React, { Component } from 'react';

const consoleStyle = 'background: rgb(26, 26, 26); color: rgb(230, 230, 230);';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(`%c ${this.state.email} sent`, `${consoleStyle}`);
    fetch(this.state.appUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
      // then continue this with the other inputs, such as email body, etc.
      },
      mode: 'no-cors',
    })
    .then((response) => {
      console.log(`%c Response: ${response}`, `${consoleStyle}`);
      response.json()
    })
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({
          formSent: true,
        });
      } else {
        this.setState({
          formSent: false,
        });
      }
    })
    .catch((error) => {
      console.error(error)
    })
  }
  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="message">
        <h1>Render stuff</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <label>Name:</label>
          <input type="name" name="name" value={this.state.name} onChange={this.handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          <label>Message</label>
          <textarea name="message" value={this.state.message} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
