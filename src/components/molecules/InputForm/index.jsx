import React, { forwardRef } from 'react'
import Label from '../../atom/Label'
import Input from '../../atom/Input'

const InputForm =  forwardRef((props, ref) => {
    const {label, htmlFor, name, type, placeholder} = props
  return (
    <>
      <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
          <Input name={name} type={type} placeholder={placeholder} ref={ref} />
      </div>
    </>
  )
})

export default InputForm