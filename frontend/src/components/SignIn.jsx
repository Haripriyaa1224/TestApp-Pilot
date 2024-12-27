import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (

    <>
     {/* Signin Component */}
      <div className="flex items-center justify-center h-screen bg-gray-100 rounded-lg">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input type="text" name="username" id="username" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <button type="submit" className="bg-primary-500 hover:bg-primary-700 text-blue font-bold py-2 px-4 rounded-full">Login</button>
          </form>
          <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
        </div>
      </div>
      </>
/******  69af6630-b6b3-401f-9aa1-330266bb7ced  *******/
  )
}

export default SignIn