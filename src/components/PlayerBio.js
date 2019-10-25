import React, { Component } from 'react';



class PlayerBio extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
      loading: true
    };
  }

  loadData(playerID) {
    fetch('http://mlb-backend.herokuapp.com/bios/' + playerID)
     .then(response => response.json())
      .then(data => this.setState({ playerData: data[0],
                                    loading: false  }));
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

    const { key_mlbam, name_first, name_last, mlb_played_first, mlb_played_last, birth_day, birth_month, birth_year } = this.state.playerData;


    return ( 
      <div className="bg-gray-900">
        <div className="container p-2 text-right text-white">
          <div className="absolute z-10 border-solid border-4 border-gray-900 -m-6">
            <img className="w-32" src={'https://securea.mlb.com/mlb/images/players/head_shot/' + key_mlbam + '.jpg'} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/213x320.gif"}} alt={name_first + ' ' + name_last} ></img> 
          </div>
            { this.state.loading ? <div></div> :
              <div>
                <p className="text-6xl text-center">{name_first} {name_last}</p>
                <p className="text-xl text-center"><b>DOB:</b> {birth_month}/{birth_day}/{birth_year} &nbsp;&nbsp;<b>Played From:</b> {mlb_played_first} - {mlb_played_last}</p>
              </div>
            }
        </div>
      </div>
    
    )
  }
}

export default PlayerBio;