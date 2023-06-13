import React from 'react'
import Label from '../../atom/Label'
import Input from '../../atom/Input'

export default function InputForm(props) {
    const {label, htmlFor, name, type, placeholder} = props
  return (
    <div className="mb-6">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} />
    </div>
  )
}
