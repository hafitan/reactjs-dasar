import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Register(props) {
  const {onClick} = props
  return (
    <form action="">
        <InputForm label='username' type='username' placeholder='Masukkan username'></InputForm>
        <InputForm label='email' type='email' placeholder='Masukkan email'></InputForm>
        <InputForm label='password' type='password' placeholder='Masukkan password'></InputForm>
        <Button onClick={onClick} color="bg-blue-500">Register</Button>
    </form>
  )
}
