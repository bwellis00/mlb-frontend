import React, { Component } from 'react';
import HR from './leaders/hr'
import WOBA from './leaders/woba'
import AVG from './leaders/avg'
import OBP from './leaders/obp'
import SLG from './leaders/slg'
import RBI from './leaders/rbi'
import RUNS from './leaders/runs'
import WAR from './leaders/war'
import WRC from './leaders/wrc'
import Runs from './leaders/runs';

class Leaders extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
      loading: true
    }
  }



  loadData(playerID) {
    fetch('https://mlb-backend.herokuapp.com/leaders/' + playerID)
     .then(response => response.json())
      .then(data => {this.setState({ 
                  seasonData: data,
                  loading: false
                     })
                     
    });
  }


  componentDidMount() {
    this.loadData(this.props.match.params.yearid);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.yearid !== prevProps.match.params.yearid) {
      this.loadData(this.props.match.params.yearid)
    }
  }



  render() {
    return ( 
    <React.Fragment>

      { this.state.loading ?
              <div className="bg-gray-900">
                <div className="container p-2 text-center text-white text-6xl">LOADING</div>
              </div> 
              : 
              <React.Fragment>
                <div className="bg-gray-900">
                  <div className="container p-2 text-center text-white text-6xl">{this.props.match.params.yearid} Leaders</div>
                </div>
                
                <div className="container text-center flex flex-wrap overflow-hidden">
                  <WAR seasonData={this.state.seasonData} />
                  <WOBA seasonData={this.state.seasonData} />
                  <WRC seasonData={this.state.seasonData} />
                  <AVG seasonData={this.state.seasonData} />
                  <OBP seasonData={this.state.seasonData} />
                  <SLG seasonData={this.state.seasonData} />
                  <HR seasonData={this.state.seasonData} />
                  <RBI seasonData={this.state.seasonData} />
                  <RUNS seasonData={this.state.seasonData} />
                </div>  
              </React.Fragment>
      }

    </React.Fragment>
  
    
    )
  }
}

export default Leaders;