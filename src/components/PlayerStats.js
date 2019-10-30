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
                          text: 'HR',
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
                            text: 'HR'
                          }}],
                        series: [
                          { 
                            name: 'HR',
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

  updateSeries = (newStat) => {
    let seasons = []
    let stat = []
    this.state.playerData.map((data, i) =>{
     seasons.push(data.Season)
     stat.push(data[newStat])  
   })
   if (newStat === "R") newStat = "RUNS"
   this.setState({
     chartOptions: {
       title: {
         text: newStat,
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
           text: newStat
         }}],
       series: [
         { 
           name: newStat,
           data: stat }
       ]
     }
   })
  }



  render() {
    const { chartOptions } = this.state;
    return ( 
    <div className="container text-center">
      { this.state.loading ? <div className="text-center text-6xl pt-6">LOADING</div> : 
      
      <div className="pt-12">
        <div className="flex justify-around pb-4 font-bold">
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "R")}>Runs</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "RBI")}>RBI</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "HR")}>Homeruns</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "AVG")}>Batting Average</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "OBP")}>OBP</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "SLG")}>SLG</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "wOBA")}>wOBA</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "wRC+")}>wRC+</div>
          <div className="cursor-pointer" onClick={this.updateSeries.bind(this, "WAR")}>WAR</div>
        </div>
        <p></p>
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








