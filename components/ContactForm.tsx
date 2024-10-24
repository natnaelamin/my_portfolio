import React from 'react'

const ContactForm = () => {
  return (
    <form>
      <h2 className='text-2xl font-bold mb-5 text-white'>Contact me</h2>
      <div className='mb-3'>
        <input type="text"
        placeholder='your name'
        name='name'
        className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white rounded border-0 shadow'
         />
      </div> 
      <div className='mb-3'>
        <input type="email"
        placeholder='Email'
        name='email'
        className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white rounded border-0 shadow'
         />
      </div>
      <div className='mb-3'>
        <input 
        placeholder='your message'
        name='message'
        className='w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white rounded border-0 shadow'
         />
      </div>
      <button className='px-6 py-2 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded bg-blue-500 hover:bg-blue-400'>
        send
      </button>
    </form>
  )
}

export default ContactForm
