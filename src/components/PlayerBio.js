import React, { Component } from 'react';



class PlayerBio extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
    };
  }

  loadData(playerID) {
    fetch('http://mlb-backend.herokuapp.com/bios/' + playerID)
     .then(response => response.json())
      .then(data => this.setState({ playerData: data[0] }));
  }


  componentDidMount() {
    this.loadData(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.loadData(this.props.id);
    }
  }

 




  render() {

     
    console.log(this.state.playerData);

    const { playerData } = this.state;


    return ( 
    <div>
       <ul>
    <img src={'https://securea.mlb.com/mlb/images/players/head_shot/' + playerData.key_mlbam + '.jpg'} alt={playerData.name_first + ' ' + playerData.name_last}></img> - 
   </ul> 
    </div>
    
    )
  }
}

export default PlayerBio;