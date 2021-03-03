import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <a href="https://www.example.io/">My app</a> &copy; 2020 My app.
        <span className="float-right">Powered by <a href="https://www.example.io/">My App</a></span>
      </footer>
    )
  }
}

export default Footer;
