import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Autosuggest from 'react-autosuggest';
import YearSelect from './YearSelect';

const playerList = []

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return playerList.filter(playerList => regex.test(playerList.Name));
}

function getSuggestionValue(suggestion) {
  return suggestion.Name;
}

function renderSuggestion(suggestion) {
  return (
    <Link to={'/players/' + suggestion.playerid}><div>{suggestion.Name}</div></Link>
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
      placeholder: "Player Search",
      value,
      onChange: this.onChange
    };


    return ( 
      <div className="py-6 bg-gray-400">
        <div className="container flex justify-center">

        <div className="pr-4">
              <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              ref={this.storeInputReference} />
        </div>
        <YearSelect />
          
        </div>   
      </div>
    
    )
  }
}

export default Header