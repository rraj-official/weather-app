import React from 'react'

const Temperature = ({current_temp}) => {
  const rounded_temp = Math.round(current_temp);
  return (
    <div className='text-8xl text-white font-light my-2'>{rounded_temp}°C</div>
  )
}

export default Temperature