import React from 'react'

import MaintenanceLogo from '@/components/svg/maintenanceLogo'
import { RegisterForm } from '@/components/forms/registerForm'

export default function RegisterPage() {
  return (
    <div className='flex-col space-y-8 w-72'>
        <div className='flex items-center gap-3'>
            <MaintenanceLogo/>
        </div>
        <RegisterForm/>
    </div>
  )
}

