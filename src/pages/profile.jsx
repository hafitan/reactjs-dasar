import React from 'react'
import Navabr from '../components/template/Navbar'
import { useLogin } from '../hooks/useLogin'

export const ProfilePage = () => {
    const username = useLogin()
  return (
    <>
        <Navabr username={username} />
    </>
  )
}

export default ProfilePage
