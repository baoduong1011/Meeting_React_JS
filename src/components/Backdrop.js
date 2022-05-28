import React from 'react'

const Backdrop = (props) => {

  function onCancelHandler() {
    props.onCancel();
  }
  

  return (
    <div className='backdrop' onClick={onCancelHandler} />
  )
}

export default Backdrop