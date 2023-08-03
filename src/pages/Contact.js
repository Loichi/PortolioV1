import React from 'react'
import Title from '../components/Title'
import ContactComponent from '../components/ContactComponent'

export default function Contact() {
  return (
    <div className="bg-red-100  h-screen flex justify-center items-center">
    <div className='w-9/12 h-5/6'>
    <Title title="Get in Touch"/>
    <ContactComponent/>
    </div>
    </div>
  )
}
