import React from 'react'

export default function Alert(props) {
  return (
    <div className={`position-absolute start-50 translate-middle alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
    </div>
  )
}
