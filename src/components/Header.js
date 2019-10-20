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
      <Link to='/players/18401'>Acuna</Link>
    </li>
    <li>
      <Link to='/players/1177'>Pujols</Link>
    </li>
    <li>
      <Link to='/players/10155'>Trout</Link>
    </li>
    
      </div>
    );
  }
}

export default Header