import React from 'react'
import Button from '../../atom/Button'

export default function Navabr(props) {
  const {username, onClick} = props
  return (
    <>
        <div className="bg-blue-500 p-5 flex justify-between ">
            <p>{username}</p>
            <Button onClick={onClick}>Logout</Button>
        </div>
    </>
  )
}
