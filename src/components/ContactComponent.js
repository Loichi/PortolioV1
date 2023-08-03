import React from 'react'

export default function ContactComponent() {
  return (
    <div className='w-full h-3/4 flex'>
        <div className='w-1/3 mt-20'>
            <p className='lg:text-2xl font-bold'>Let's talk about everything!</p>
            <p className='lg:text-1xl'>Don't like forms? Send me an email.</p>
        </div>
        <div class=" w-2/3 mt-20 p-6 rounded-lg shadow-md">
    <form>
        <div className='flex justify-between'>

        <div class="mb-4 w-1/3">
            <label class="block text-sm font-bold mb-2" for="name">Name:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/>
        </div>
        <div class="mb-4 w-1/2">
            <label class="block text-sm font-bold mb-2" for="email">Email:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
        </div>
        </div>
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="subject">Subject:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject"/>
        </div>
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="message">Message:</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your Message"/>
        </div>
        <div class="">
        <button className="bg-red-500 text-white font-bold rounded-full w-48 h-10 mt-10">
                Send Message
              </button>
        </div>
    </form>
</div>


        </div>
  )
}
