import React from 'react'

export default function Blog() {
  return (
    <div className='error'>
      <img className='errorImg' src={process.env.PUBLIC_URL + '/error/error.png'}/>
    </div>
  )
}
