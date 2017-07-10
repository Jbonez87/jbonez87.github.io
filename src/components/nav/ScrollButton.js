import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
    };
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollStep() {
    return window.pageYOffset === 0 ? clearInterval(this.state.intervalId) :
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  scrollUp() {
    const interval = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: interval });
  }
  render() {
    return (
      <button
        className="scroll"
        onClick={this.scrollUp}
      >
        Scroll Up
      </button>
    );
  }
}

ScrollButton.propTypes = {
  scrollStepInPx: PropTypes.string.isRequired,
  delayInMs: PropTypes.string.isRequired,
};

export default ScrollButton;
