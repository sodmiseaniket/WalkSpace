import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>Mankhurd <br /> Mumbai, Maharashtra, India</p>
          <p className=' text-gray-500'>Tel: +91-7575757575 <br /> Email: admin@Walkspace.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Walkspace</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <NavLink
            to="/collection"
            className="bg-black text-white text-xs px-10 py-4 rounded-lg transition-colors duration-300 hover:bg-[#356699]"
          >
            Shop Now
          </NavLink>
        </div>
      </div>

      <ContactUs/>
    </div>
  )
}

export default Contact
