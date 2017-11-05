import React from 'react'

const NearestColorForm = ({onChange, onSubmit, value}) => (
  <form className='NearestColorForm' onSubmit={onSubmit}>
    <input
      type='text'
      name='nearestColorValue'
      value={value}
      onChange={onChange}
    />
    <button>NearestColor</button>
  </form>
)

export default NearestColorForm
