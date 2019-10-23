import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Autosuggest from 'react-autosuggest';

const playerList = require('../playerList.json');

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return playerList.filter(playerList => regex.test(playerList.fullName));
}

function getSuggestionValue(suggestion) {
  return suggestion.fullName;
}

function renderSuggestion(suggestion) {
  return (
    <Link to={'/players/' + suggestion.playerid}><div>{suggestion.fullName}</div></Link>
  );
}


class Header extends Component {
  constructor() {
    super();


    this.state = {
      playerList: [],
      link: '',
      value: '',
      suggestions: []
    };
  }
    
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
      
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
    
    storeInputReference = autosuggest => {
      if (autosuggest !== null) {
        this.input = autosuggest.input;
      }
    };
 

  componentDidMount() {
    this.input.focus();
    
  }


  render() {

    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };


    return ( 
      <div className="pb-6 bg-gray-400">
        <div className="container">

        <div className="absolute z-50"><Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        ref={this.storeInputReference} />
        </div>

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