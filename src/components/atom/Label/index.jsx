import React from 'react'

export default function Label(props) {
    const {htmlFor, childern} = props
  return (
    <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700 mb-1'>
        {childern}
    </label>
  )
}
