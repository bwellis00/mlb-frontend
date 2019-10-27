import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class PlayerStats extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
      loading: true,
      chartOptions: {
        xAxis: {
          categories: [],
        },
        series: [
          { 
            data: [] }
        ]
      }
    }
  }



  loadData(playerID) {
    fetch('https://mlb-backend.herokuapp.com/stats/' + playerID)
     .then(response => response.json())
      .then(data => {this.setState({ 
                  playerData: data,
                  loading: false
                     })
                     let seasons = []
                     let stat = []
                     this.state.playerData.map((data, i) =>{
                      seasons.push(data.Season)
                      stat.push(data.HR)  
                    })
                    this.setState({
                      chartOptions: {
                        title: {
                          text: 'Homeruns Per Year',
                          style: {
                            fontWeight: 'bold',
                            fontSize: '25px'
                        }
                        },
                        legend: {
                          enabled: false
                      },
                        xAxis: {
                          categories: seasons,
                        },
                        yAxis: [{
                          title: {
                            text: 'HOMERS'
                          }}],
                        series: [
                          { 
                            name: 'Homers',
                            data: stat }
                        ]
                      }
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

    const { chartOptions } = this.state;

    return ( 
    <div className="container text-center">
      { this.state.loading ? <div className="text-center text-6xl pt-6">LOADING</div> : 
      
      <div className="pt-8"> 
<HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          key={Math.random()}
        />
      </div>     
      
      
      }


    </div>
  
    
    )
  }
}

export default PlayerStats;








