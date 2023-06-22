import React, { useEffect, useRef, useState } from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'
import {login} from '../../../services/auth.service'

export default function Login() {
  const [errorLogin, setErrorLogin] = useState('')

  const handleLogin = (event) => {
    // event.preventDefault() = untuk mencegah halaman merefresh
    event.preventDefault()
    // console.log('terklik login')
    // event.target.email.value untuk mengambil value yang ada di input form
    // console.log(event.target.email.value)
    // console.log(event.target.password.value)
    // buat nyimpen data dari input form ke localstorage
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    // buat pindah halaman 
    // window.location.href = '/products'
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res)
        window.location.href = '/products'
      } else {
        console.log('login', res)
        // menampilkan halaman error
        setErrorLogin(res.response.data)
      }
    })
  }

  /** useRef = hooks yang biasanya dipake untuk mengakses DOM,
   * bedanya sama useState, useRef ga bakal dirender ulang
   * setiap ada perubahan data.
   * userref tidak bisa diakses pake props tapi pake forwardref
   */
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <form action="" onSubmit={handleLogin}>
        <InputForm label="username" type="text" name='username' placeholder="Masukkan username" ref={usernameRef} ></InputForm>
        <InputForm label="password" type="password" name="password" placeholder="Masukkan password" ></InputForm>
        <Button color="bg-blue-500 hover:bg-blue-700" size='w-full'>Login</Button>
        {errorLogin && <p className='mt-5 text-center text-sm text-red-500'>{errorLogin}</p>}
    </form>
  )
}
