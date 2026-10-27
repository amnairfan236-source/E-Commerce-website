import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-between'>
      
      {/* Main Content Card Container */}
      <div className='max-w-5xl mx-auto px-6 py-10 w-full'>
        <div className='bg-white shadow-lg rounded-2xl p-8 md:p-12 text-gray-800'>
          
          {/* Title */}
          <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8'>
            About Zaptro
          </h1>

          {/* Intro Text */}
          <p className='text-gray-600 text-base leading-relaxed mb-8'>
            Welcome to <span className='text-red-600 font-semibold'>Zaptro</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
          </p>

          {/* Mission Section */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-red-600 mb-3'>Our Mission</h2>
            <p className='text-gray-600 text-base leading-relaxed'>
              At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
            </p>
          </div>

          {/* Why Choose Zaptro Section */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-red-600 mb-4'>Why Choose Zaptro?</h2>
            <ul className='list-disc list-inside space-y-2 text-gray-600 text-base'>
              <li>Top-quality electronic products from trusted brands</li>
              <li>Lightning-fast and secure shipping</li>
              <li>Reliable customer support, always ready to help</li>
              <li>Easy returns and hassle-free shopping experience</li>
            </ul>
          </div>

          {/* Vision Section */}
          <div className='mb-10'>
            <h2 className='text-2xl font-bold text-red-600 mb-3'>Our Vision</h2>
            <p className='text-gray-600 text-base leading-relaxed'>
              We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
            </p>
          </div>

          {/* Join the Zaptro Family (Border-t removed here) */}
          <div className='text-center pt-4'>
            <h3 className='text-xl font-bold text-red-600 mb-2'>Join the Zaptro Family</h3>
            <p className='text-gray-600 text-sm mb-6'>
              Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.
            </p>
            <Link to="/products">
              <button className='bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg text-sm transition shadow-md'>
                Start Shopping
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <footer className='bg-[#0b1329] text-gray-300 pt-12 pb-6 px-6 md:px-16 mt-12 relative'>
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

export default About