import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  constructor() {
    super();

  }

 


  componentDidMount() {

  }


  render() {

    return ( 
      <div className="pb-6 bg-gray-400">
        <div className="container">

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
      </div>
    
    )
  }
}

export default Header