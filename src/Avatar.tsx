import React from 'react'

function Avatar(props: {avatar:string, name:string, isMessage?:boolean}) {
  return (
    <img
        src={props.avatar}
        alt={`${props.name} avatar`}
        className={`avatar ${props.isMessage ? 'avatar--private-message' : ''}`}
      />
  )
}

export default Avatar