import React, { Component } from 'react';


class PlayerStats extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
      loading: true
    };
  }

  loadData(playerID) {
    fetch('https://mlb-backend.herokuapp.com/stats/' + playerID)
     .then(response => response.json())
      .then(data => {this.setState({ 
                  playerData: data,
                  loading: false
                     })
    });
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


    return ( 
    <div className="container text-center">
      { this.state.loading ? <div className="text-center text-6xl pt-6">LOADING</div> : 
      
      <div> Yearly Home Run Totals<br></br><br></br>{this.state.playerData.map((data, i) =>{

        return(
        <div>{data.Season} - {data.HR}</div>
        )
      })}

              
      </div>     
      
      
      }


    </div>
  
    
    )
  }
}

export default PlayerStats;








