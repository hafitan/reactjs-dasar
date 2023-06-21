import React, { useEffect, useRef } from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login() {
  const handleLogin = (event) => {
    // event.preventDefault() = untuk mencegah halaman merefresh
    event.preventDefault()
    console.log('terklik login')
    // event.target.email.value untuk mengambil value yang ada di input form
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    // buat nyimpen data dari input form ke localstorage
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    // buat pindah halaman 
    window.location.href = '/products'
  }

  /** useRef = hooks yang biasanya dipake untuk mengakses DOM,
   * bedanya sama useState, useRef ga bakal dirender ulang
   * setiap ada perubahan data.
   * userref tidak bisa diakses pake props tapi pake forwardref
   */
  const emailRef = useRef(null)
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <form action="" onSubmit={handleLogin}>
        <InputForm label="email" type="email" name='email' placeholder="Masukkan email" ref={emailRef} ></InputForm>
        <InputForm label="password" type="password" name="password" placeholder="Masukkan password" ></InputForm>
        <Button color="bg-blue-500 hover:bg-blue-700" size='w-full'>Login</Button>
    </form>
  )
}
