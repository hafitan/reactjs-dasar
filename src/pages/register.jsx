import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Register from '../components/organism/Register'
import { Link } from 'react-router-dom'

export default function register() {
  return (
    <>
        <AuthLayout title="Register" desc="silahkan isi">
            <Register></Register>
            <p className="text-sm mt-4 text-center">
              Have an account?{' '}
              <Link to='/login' className='font-bold text-blue-500'>Login</Link>
            </p>
        </AuthLayout>
    </>
  )
}
