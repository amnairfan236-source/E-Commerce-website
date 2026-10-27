import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! Your message has been sent.`)
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-[#111827] min-h-screen text-white flex flex-col justify-between'>
      
      {/* Main Contact Container */}
      <div className='max-w-6xl mx-auto px-6 py-12 w-full flex-grow flex items-center justify-center'>
        
        {/* Dark Purple Gradient Card */}
        <div className='bg-gradient-to-br from-[#1e1e38] via-[#242445] to-[#1a1a30] border border-gray-800 shadow-2xl rounded-2xl p-8 md:p-12 w-full'>
          
          {/* Main Title */}
          <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight'>
            Get in Touch with <span className='text-red-500'>Zaptro</span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
            
            {/* Left Side: Contact Info */}
            <div className='space-y-6 pr-0 md:pr-4'>
              <h2 className='text-xl font-bold text-white'>Contact Info</h2>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Have a question or need support? We're here to help you with your electronics journey.
              </p>

              <div className='space-y-4 pt-2 text-sm text-gray-300'>
                <p className='flex items-center gap-2'>
                  <span className='text-lg'>📍</span> 
                  <span><strong className='text-white'>Address:</strong> 123 Tech Lane, Kolkata, India</span>
                </p>
                <p className='flex items-center gap-2'>
                  <span className='text-lg'>✉️</span> 
                  <span><strong className='text-white'>Email:</strong> support@zaptro.com</span>
                </p>
                <p className='flex items-center gap-2'>
                  <span className='text-lg'>📞</span> 
                  <span><strong className='text-white'>Phone:</strong> +91 98765 43210</span>
                </p>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label className='block text-xs font-semibold text-gray-300 mb-1.5'>Your Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required
                  className='w-full bg-white text-gray-900 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-gray-300 mb-1.5'>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                  className='w-full bg-white text-gray-900 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-gray-300 mb-1.5'>Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Type your message..." 
                  required
                  className='w-full bg-[#5b5b7c]/40 text-white placeholder-gray-400 border border-gray-600 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none'
                ></textarea>
              </div>

              {/* Red-to-Purple Gradient Button */}
              <button 
                type="submit" 
                className='w-full bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl text-sm transition shadow-lg active:scale-95 flex items-center justify-center gap-2'
              >
                Send Message 🚀
              </button>
            </form>

          </div>

        </div>
      </div>

      {/* Footer Section */}
      <footer className='bg-[#0b1329] text-gray-300 pt-12 pb-6 px-6 md:px-16 mt-12 relative border-t border-gray-800'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800'>
          
          {/* Col 1: Brand Info */}
          <div>
            <h2 className='text-2xl font-bold text-white mb-3'>
              <span className='text-red-500'>Z</span>aptro
            </h2>
            <p className='text-xs text-gray-400 mb-4 leading-relaxed'>
              Powering Your World with the Best in Electronics.
            </p>
            <p className='text-xs text-gray-400'>123 Electronics St, Style City, NY 10001</p>
            <p className='text-xs text-gray-400 mt-1'>Email: support@Zaptro.com</p>
            <p className='text-xs text-gray-400 mt-1'>Phone: (123) 456-7890</p>
          </div>

          {/* Col 2: Customer Service */}
          <div>
            <h3 className='font-semibold text-white mb-4 text-sm'>Customer Service</h3>
            <ul className='space-y-2 text-xs text-gray-400'>
              <li><Link to="/contact" className='hover:text-white transition'>Contact Us</Link></li>
              <li><a href="#" className='hover:text-white transition'>Shipping & Returns</a></li>
              <li><a href="#" className='hover:text-white transition'>FAQs</a></li>
              <li><a href="#" className='hover:text-white transition'>Order Tracking</a></li>
              <li><a href="#" className='hover:text-white transition'>Size Guide</a></li>
            </ul>
          </div>

          {/* Col 3: Follow Us */}
          <div>
            <h3 className='font-semibold text-white mb-4 text-sm'>Follow Us</h3>
            <div className='flex gap-4 text-gray-400'>
              <a href="#" className='hover:text-white transition'><FaFacebook size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaInstagram size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaTwitter size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaPinterest size={18} /></a>
            </div>
          </div>

          {/* Col 4: Stay in the Loop (Newsletter) */}
          <div>
            <h3 className='font-semibold text-white mb-2 text-sm'>Stay in the Loop</h3>
            <p className='text-xs text-gray-400 mb-4'>
              Subscribe to get special offers, free giveaways, and more
            </p>
            <div className='flex items-center'>
              <input 
                type="email" 
                placeholder="Your email address" 
                className='bg-white text-gray-800 px-3 py-2 rounded-l-md text-xs w-full focus:outline-none'
              />
              <button className='bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 font-medium rounded-r-md transition'>
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top Button */}
        <div className='max-w-7xl mx-auto pt-6 flex justify-between items-center text-xs text-gray-400 relative'>
          <p className='mx-auto'>
            © 2026 <span className='text-red-500 font-semibold'>Zaptro</span>. All rights reserved
          </p>
          
          <button 
            onClick={scrollToTop}
            className='absolute right-0 bottom-2 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg shadow-md transition'
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>

    </div>
  )
}

export default Contact