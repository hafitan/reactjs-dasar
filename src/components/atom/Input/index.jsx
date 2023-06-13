import React from 'react'

export default function Input(props) {
    const {type, name, placeholder} = props
  return (
    <input 
        type={type}
        className='text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder:text-slate-400'
        placeholder={placeholder}
        name={name}
        id={name}
     />
  )
}
