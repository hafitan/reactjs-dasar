import React from 'react'

export default function Button(props) {
    const {color = "bg-black", children, size} = props
    return <button className={`h-15 px-6 font-semibold rounded-md ${color} ${size} text-white`}>{children}</button>
}
