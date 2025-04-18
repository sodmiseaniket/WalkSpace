import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import ContactUs from '../components/ContactUs'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-900'>
              <p align = 'justify'>At Walkspace, we offer a one-stop destination for all your footwear needs, catering to men, women, and kids. Our Shoe Mart is dedicated to providing top-quality footwear that combines style, comfort, and durability, ensuring you always find the perfect pair for every occasion. From casual sneakers to formal shoes, athletic gear to seasonal essentials, our diverse collection has something for everyone.</p>
              <p align = 'justify'>Our journey began with a passion for making premium footwear accessible to all. At Walkspace, we strive to create a seamless shopping experience through our user-friendly platform, curated collections, and exceptional customer service. Every product we offer is crafted with care and quality, so you can step out with confidence and style.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p align = 'justify'>Our journey began with a passion for making premium footwear accessible to all. At Walkspace, we strive to create a seamless shopping experience through our user-friendly platform, curated collections, and exceptional customer service. Every product we offer is crafted with care and quality, so you can step out with confidence and style.</p>
          </div>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-black'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-black'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-black'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <ContactUs/>
      
    </div>
  )
}

export default About
