import React, { Component } from 'react';
import HR from './leaders/hr'


class Leaders extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      seasonData: [],
      loading: true
    };
  }

  loadData(yearID) {
    
    fetch('https://mlb-backend.herokuapp.com/leaders/' + yearID)
     .then(response => response.json())
      .then(data => {this.setState({ 
                  seasonData: data,
                  loading: false,
                  
                     })
                                       
    });
  }


   componentDidMount() {
      
    this.loadData(this.props.match.params.yearid);
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.yearid !== prevState.yearid) {
      
      this.loadData(this.props.match.params.yearid);
    }
  }




  render() {
    
    
    return ( 
    <React.Fragment>
    <div className="bg-gray-900">
        <div className="container p-2 text-right text-white">
                <p className="text-6xl text-center">{this.props.match.params.yearid} Leaders</p>
        </div>
    </div>
    
    <div className="bg-white">
        <div className="container text-center">
           { this.state.loading ? <div className="text-center text-6xl pt-6">LOADING</div> : <div>
             
           
           {/* <HR stats={this.state.seasonData} />

             <p></p><p></p><br></br>
             
             {this.state.seasonData.sort((a, b) => b.wOBA - a.wOBA).filter(data => data.PA > 501).slice(0, 10).map((seasonData, index) => {  
                  return (
                    <li>{seasonData.Name} - {seasonData.wOBA}</li>

                  )
                })} */}
             
             
             
             
             
             
             </div> }
       </div>
    </div>
    </React.Fragment>
  
    
    )
  }
}

export default Leaders;








