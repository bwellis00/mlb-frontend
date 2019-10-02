import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  constructor() {
    super();

  }

 


  componentDidMount() {

  }

  render() {

    // Finally, render it!
    return (<div>

            <li>
      <Link to='/players/660670'>Acuna</Link>
    </li>
    <li>
      <Link to='/players/405395'>Pujols</Link>
    </li>
    
      </div>
    );
  }
}

export default Header