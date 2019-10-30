import React from 'react'

const HR = props => (
  <React.Fragment>
              {props.seasonData.sort((a, b) => b.HR - a.HR).filter(data => data.PA > 501).slice(0, 10).map((data, i) =>{
                       return (

                        i % 2 ? <div className="text-pink-600">{data.Name} - {data.HR}</div> : <div className="">{data.Name} - {data.HR}</div>

                       )
                      
                     }
                    )
                  }
  </React.Fragment>
)

export default HR
