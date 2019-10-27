import React, { Component } from 'react';


class Leaders extends Component {

  constructor(props) {
    super(props);


   
    this.state = {
      loading: true,
      yearid: ""
    };
  }

  loadData(yearid) {



  }

   componentDidMount() {
      
      // checks to see if a year was selected. if not it defaults to 2019
      if(this.props.match.params.yearid === undefined)
      {
        this.setState({yearid: 2019})
      }
      else{
        this.setState({yearid: this.props.match.params.yearid})
      }
      
      this.loadData(this.state.yearid);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.yearid !== prevProps.yearid) {
      this.loadData(this.props.match.params.yearid);
    }
  }




  render() {

    return ( 
    
    <div className="bg-gray-900">
        <div className="container p-2 text-right text-white">
                <p className="text-6xl text-center">{ this.props.match.params.yearid ? <span>{this.props.match.params.yearid}</span>: <span>{this.state.yearid}</span> }  Leaders</p>
    
        </div>
    </div>
  
    
    )
  }
}

export default Leaders;








