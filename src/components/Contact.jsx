import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/49fcd1ef-f50d-4888-bd02-4210a34d3135" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300 '>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email - kev_mccall@yahoo.com </p>
            </div>
            <input type="text" placeholder='Name' name='name' />
            <input className='my-4' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-600 hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
        </form>


    </div>
  )
}

export default Contact