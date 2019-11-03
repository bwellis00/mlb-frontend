import React from 'react'
import { Link } from 'react-router-dom'


const RBI = props => (
  <div className="my-2 px-2 w-1/3 overflow-hidden">
    <div className="text-2xl pb-3">RBI</div>
              {props.seasonData.sort((a, b) => b.RBI - a.RBI).filter(data => data.PA > 501).slice(0, 10).map((data, i) =>{
                      let bgClass = ""
                      i % 2 ? bgClass = "bg-gray-400" : bgClass= "bg-gray-300"
                       return (
                        <Link to={'/players/' + data.playerid}>
                        <div className={bgClass + " text-black hover:bg-gray-200 cursor-pointer flex"}>
                          <div className="w-2/3">{data.Name}</div>
                          <div className="w-1/3">{data.RBI}</div>
                        </div>
                        </Link>

              
                       )
                      
                     }
                    )
                  }
  </div>
)

export default RBI
