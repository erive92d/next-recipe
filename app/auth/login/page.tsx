import testApi from '@/controllers/test'
import React from 'react'

export default async function page() {

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4'>
        <div className=''>Login</div>
        <div className='flex flex-col gap-2'>
            <input className='input bg-white' placeholder='email...'/>
            <input className='input bg-white' placeholder='password..'/>
            <button className='btn btn-sm btn-success'>Log In</button>
        </div>
    </div>
  )
}
