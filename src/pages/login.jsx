import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[url('../public/images/bg.jpg')] bg-cover">
        <AuthLayout title="login" desc="silahkan isi">
            <Login></Login>
            <p className="text-sm mt-4 text-center">
              Dont have an account?{' '}
              {/* <a href="/register" className='font-bold text-blue-500'>Register</a> */}
              {/* cara menggunakan routing pake Link buat buat pindah antar komponen/halaman*/}
              <Link to='/register' className='font-bold text-blue-500'>Register</Link>
            </p>
        </AuthLayout>
      </div>
    </>
  )
}
