import React, { Component } from 'react';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      isSubmitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => {
        this.setState(
          {
            isSubmitted: true,
            name: '',
            email: '',
            message: ''
          },
          console.log(this.state)
        );
      })
      .catch(error => alert(error));

    e.preventDefault();
    // clear form
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-section">
        <div className="contact">
          <h5>Contact me</h5>

          <div className="contact-form">
            <form onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={this.handleChange}
                required
              />
              <textarea
                name="message"
                value={message}
                placeholder="Your Message"
                rows="5"
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className={this.state.isSubmitted ? 'sent' : ''}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
