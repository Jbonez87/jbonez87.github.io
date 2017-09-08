import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/dropdown.css';

// Component Imports
import ContactForm from './ContactForm';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value: 'Select an option'
		};
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
	}

	expand() {
		this.setState({ expanded: true });
	}

	collapse() {
		this.setState({ expanded: false });
	}

	handleItemClick(e) {
    console.log(e.target.innerText);
		this.setState({
			expanded: false,
			value: e.target.innerText
		});
	}

	handleTriggerClick() {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		let dropdown = undefined;
		if (this.state.expanded) {
			dropdown = (
				<div className="content">
				{
					this.props.options.map((item, key) => {
						return (
              <div
                key={key}
                onClick={this.handleItemClick}
                className="item"
              >
                {item}
              </div>
            );
					})
				}
				</div>
			);
		}

		return (
      <div className='dropdown-container'>
        <div className={`dropdown ${this.state.expanded ? 'active' : ''}`}
  				tabIndex="0"
  				onBlur={this.collapse}
          >
  				<div className="trigger" onClick={this.handleTriggerClick}>
  					{this.state.value}
  				</div>
  				{dropdown}
  			</div>
        <div className='form-container'>
          <ContactForm
            form={this.state.value}
          />
        </div>
      </div>

		);
	}
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Dropdown;

// ReactDOM.render(<Dropdown options={['Select an option','Leave a message', 'Ask for a quote', 'Make a suggestion']} />, document.getElementById('app'));
