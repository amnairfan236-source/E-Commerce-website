import React, { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('')

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4'>
      <div className='bg-white shadow-2xl border rounded-2xl p-8 w-[420px] relative'>
        
        {/* Header */}
        <div className='text-center mb-6'>
          <h2 className='text-xl font-bold text-gray-900'>Sign in to Blog</h2>
          <p className='text-sm text-gray-500 mt-1'>Welcome back! Please sign in to continue</p>
        </div>

        {/* Social Logins */}
        <div className='grid grid-cols-2 gap-3 mb-5'>
          <button className='flex items-center justify-center gap-2 border py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition'>
            <FaGithub className='text-lg' /> GitHub
          </button>
          <button className='flex items-center justify-center gap-2 border py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition'>
            <FaGoogle className='text-lg' /> Google
          </button>
        </div>

        {/* Divider */}
        <div className='relative flex py-2 items-center mb-5'>
          <div className='flex-grow border-t border-gray-200'></div>
          <span className='flex-shrink mx-4 text-gray-400 text-xs uppercase'>or</span>
          <div className='flex-grow border-t border-gray-200'></div>
        </div>

        {/* Email Input */}
        <div className='mb-5'>
          <label className='block text-xs font-semibold text-gray-700 uppercase mb-1'>Email address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            className='w-full border px-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>

        {/* Continue Button */}
        <button 
          onClick={() => alert(`Signed in with: ${email}`)}
          className='w-full bg-[#6c47ff] text-white py-2.5 rounded-lg font-medium hover:bg-[#5b38ee] transition mb-6 shadow-md'
        >
          Continue ▸
        </button>

        {/* Footer Links */}
        <div className='text-center text-xs text-gray-600 mb-4'>
          Don’t have an account? <span className='text-[#6c47ff] font-medium cursor-pointer hover:underline'>Sign up</span>
        </div>

        {/* Secured by Clerk */}
        <div className='border-t pt-4 text-center text-xs text-gray-400 flex flex-col items-center gap-1'>
          <span>Secured by <span className='font-semibold text-gray-600'>clerk</span></span>
          <span className='text-amber-600 font-medium'>Development mode</span>
        </div>

      </div>

      {/* Back to Home Link */}
      <Link to="/" className='mt-6 text-sm text-gray-600 hover:underline'>
        ← Back to Home
      </Link>
    </div>
  )
}

export default SignIn