import React, { Component } from 'react';

const consoleStyle = 'background: rgb(26, 26, 26); color: #bada55;';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      message: '',
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
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
    console.log(e.target.name + ': ' + e.target.value + ' sent!!');
    this.setState({
      email: '',
      name: '',
      message: '',
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
  render() {
    return (
      <div className="message">
        <form
          onKeyUp={this.handleKeyUp}
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
