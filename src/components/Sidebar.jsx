import React, { Component } from 'react';

import '../styles/styles.css';

import { stores } from '../../sweetgreen.js';

class Sidebar extends Component {
  componentDidMount() {
    console.log(stores);
  }
  render() {
    return (
      <div className="sidebar">
        <div className="heading">
          <h1>Our locations</h1>
        </div>
        <div id="listings" className="listings"></div>
      </div>
    );
  }
}
export default Sidebar;