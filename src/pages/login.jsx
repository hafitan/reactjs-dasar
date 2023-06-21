import React, { useState } from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import { Link } from 'react-router-dom'
import Register from '../components/organism/Register'
import Button from '../components/atom/Button'

export default function LoginPage() {
  const [modal, setModal] = useState(false)

  const handleRegister = () => {
    setModal(true)
  }

  const handleClose = () => {
    setModal(false)
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[url('../public/images/bg.jpg')] bg-cover">
        <AuthLayout title="login" desc="silahkan isi" type='login'>
          {modal && (
            <div className="absolute bg-white w-1/4 px-10 py-5 rounded-2xl border-4 border-blue-500">
              <Register></Register>
              <button onClick={handleClose} className='mt-2 bg-red-400 h-15 px-8 font-semibold rounded-md'>Close</button>
            </div>
          )}
          <Login></Login>
          <p className="text-sm mt-4 text-center">
            Don't have an account?{' '}
            <Button color='bg-blue-500' onClick={handleRegister}>Register</Button>
          </p>
        </AuthLayout>
      </div>
    </>
  )
}