import React from 'react'

const RetrieveDevices = (props) => {
    return (
      <div>
            <button type='button' onClick={() => props.retrieve()}>Search</button>
      </div>
    )
  }
   
  export default Search