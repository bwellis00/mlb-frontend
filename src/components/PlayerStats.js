import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
var dataPoints =[]; 

class PlayerStats extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      playerData: [],
    };
  }

  loadData(playerID) {
    var chart = this.chart;
    fetch('https://mlb-backend.herokuapp.com/stats/' + playerID)
     .then(response => response.json())
      .then(data => {this.setState({ 
                  playerData: data,
                     })
                    this.state.playerData.map((data, i) =>(
                      dataPoints.push({
                        x: data.Season,
                        y: data.HR
                      }),
                      chart.render()
                  ));


    });
  }


  componentDidMount() {
    this.loadData(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.loadData(this.props.id);
      dataPoints = [];
    }
  }




  render() {

   const options = {
     animationEnabled: true,
    theme: "light2",
    title: {
      text: "Homeruns Per Year"
    },
    axisY: {
      title: "Homers",
      includeZero: false
    },
    axisX:{
      interval: 1
    },
    data: [{
      type: "line",
      xValueFormatString: "####",
      dataPoints: dataPoints
    }]
  }

    return ( 
    <div>
       <ul>

    <li>
      {this.props.id}
    </li>
   </ul>  

   < div > 
   <CanvasJSChart options = {options} 
      onRef={ref => this.chart = ref}
    />
    
    } </div>
      
 

   

    </div>
  
    
    )
  }
}

export default PlayerStats;








