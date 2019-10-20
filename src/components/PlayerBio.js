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
    <div className="container p-2 text-right">
      <div className="absolute z-40">
         <img className="w-40" src={'https://securea.mlb.com/mlb/images/players/head_shot/' + playerData.key_mlbam + '.jpg'} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/213x320.gif"}} alt={playerData.name_first + ' ' + playerData.name_last} ></img> 
      </div>
      NAME
    </div>
    
    )
  }
}

export default PlayerBio;