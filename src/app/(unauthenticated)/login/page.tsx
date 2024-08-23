import React from 'react'
import { LoginForm } from '@/components/forms/loginForm'
import MaintenanceLogo from '@/components/svg/maintenanceLogo'

export default function LoginPage() {
  return (
    <div className='flex-col space-y-8 w-72'>
        <div className='flex items-center gap-3'>
            <MaintenanceLogo/>
        </div>
        <LoginForm/>
    </div>
  )
}
