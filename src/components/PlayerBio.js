import React, { Component } from 'react';



class PlayerBio extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
    };
  }

  loadData(playerID) {
    fetch('http://localhost:3001/bio/' + playerID)
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
    <img src={'https://securea.mlb.com/mlb/images/players/head_shot/' + playerData.mlbam + '.jpg'} alt={playerData.nameFirst + ' ' + playerData.nameLast}></img> - 
   </ul>  <p>Bats: {playerData.bats}</p>
             <p> Throws: {playerData.throws}</p>
    </div>
    
    )
  }
}

export default PlayerBio;