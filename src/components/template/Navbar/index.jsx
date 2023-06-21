import React from 'react'
import Button from '../../atom/Button'

export default function Navabr({onClick}) {
  return (
    <>
        <div className="bg-blue-500 p-5 flex justify-between ">
            <p>anval gaming</p>
            <Button onClick={onClick}>Logout</Button>
        </div>
    </>
  )
}
