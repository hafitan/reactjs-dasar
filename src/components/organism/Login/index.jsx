import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login() {
  return (
    <form action="">
        <InputForm label="email" type="email" placeholder="Masukkan email" ></InputForm>
        <InputForm label="email" type="password" placeholder="Masukkan password" ></InputForm>
        <Button color="bg-blue-500">Login</Button>
    </form>
  )
}
