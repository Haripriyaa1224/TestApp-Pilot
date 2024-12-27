import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
            <input type="text" name="mobile" id="mobile" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div className="mb-4">
            <span className="block text-gray-700">Role</span>
            <div className="flex items-center">
              <input type="radio" id="student" name="role" value="student" className="mr-2" />
              <label htmlFor="student" className="mr-4">Student</label>
              <input type="radio" id="teacher" name="role" value="teacher" className="mr-2" />
              <label htmlFor="teacher">Teacher</label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="batch" className="block text-gray-700">Batch</label>
            <select id="batch" name="batch" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
              <option value="">Select Batch</option>
              <option value="batch1">Batch 1</option>
              <option value="batch2">Batch 2</option>
              <option value="batch3">Batch 3</option>
            </select>
          </div>
          <button type="submit" className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full w-full">Register</button>
        </form>
        <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-700'>Login</span>
        </Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default Register;

