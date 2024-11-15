import React from 'react'

const Props2 = (props) => {
    // const {wasim}=props
  return (
    <div>   
    <p className='was'>props2</p>
    {/* <p>{wasim.name}</p> */}
    <p>{props.wasim}</p>

    </div>
  )
}

export default Props2