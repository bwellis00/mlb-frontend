import React, { Component } from 'react';
import HR from './leaders/hr'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


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
    <div className="container text-center">
      { this.state.loading ? <div className="">l</div> : 
      
      <div className="pt-12">

        <HR seasonData={this.state.seasonData} />

      </div>     
      
      
      }


    </div>
  
    
    )
  }
}

export default Leaders;








