import React from 'react'

const Sticky = (props) => {
  return (
    <div style={{position: 'fixed', zIndex: '1', background: 'linear-gradient(to right, rgba(165,0,0,1) 0%, rgba(50,104,189,1) 100%', width: '100%', borderBottom: '2px white solid'}}>
      {props.children}
    </div>
  )
}

export default Sticky
