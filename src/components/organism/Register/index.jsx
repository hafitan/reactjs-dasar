import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Register() {
  return (
    <form action="">
        <InputForm label='username' type='username' placeholder='Masukkan username'></InputForm>
        <InputForm label='email' type='email' placeholder='Masukkan email'></InputForm>
        <InputForm label='password' type='password' placeholder='Masukkan password'></InputForm>
        <Button color="bg-blue-500">Register</Button>
    </form>
  )
}
