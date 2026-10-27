import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowUp, ShoppingCart } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Home() {
  const slides = [
    {
      id: 0,
      category: 'AUDIO',
      tagline: 'Powering Your World with the Best in Electronics',
      title: 'SONY WH-1000XM4 WIRELESS NOISE CANCELLING HEADPHONES',
      description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 1,
      category: 'GAMING',
      tagline: 'Powering Your World with the Best in Electronics',
      title: 'MICROSOFT XBOX X/S WIRELESS CONTROLLER ROBOT WHITE',
      description: 'Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined geometry for enhanced comfort and effortless control during gameplay.',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      category: 'MOBILE',
      tagline: 'Powering Your World with the Best in Electronics',
      title: 'APPLE IPHONE 15 PRO MAX TITANIUM',
      description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile pro camera system.',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      category: 'TV',
      tagline: 'Powering Your World with the Best in Electronics',
      title: '4K ULTRA HD SMART OLED TV 55 INCH',
      description: 'Immerse yourself in breathtaking 4K picture quality with infinite contrast, rich colors, and smart streaming features built right in.',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      category: 'LAPTOP',
      tagline: 'Powering Your World with the Best in Electronics',
      title: 'MACBOOK PRO 16 INCH M3 MAX',
      description: 'Supercharged by M3 Max, the most advanced chip ever in a personal laptop, delivering extreme performance for pro workflows.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      category: 'APPLIANCES',
      tagline: 'Powering Your World with the Best in Electronics',
      title: 'SMART COFFEE MAKER MACHINE',
      description: 'Brew your favorite coffee house drinks right at home with precision temperature control and built-in grinder.',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=60'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [addedId, setAddedId] = useState(null)

  const featuredProducts = [
    {
      id: 1,
      title: 'Sony WH-1000XM3 Wireless Headphones',
      category: 'Audio',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'PlayStation 5 Wireless Controller',
      category: 'Gaming',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Apple iPhone 15 Pro Max',
      category: 'Mobile',
      price: 1199.99,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      title: '4K Ultra HD Smart OLED TV 55"',
      category: 'TV',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
  }

  const addToCart = (product) => {
    let existingCart = JSON.parse(localStorage.getItem('zaptro_cart')) || []
    const itemIndex = existingCart.findIndex(item => item.id === product.id)

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1
    } else {
      existingCart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('zaptro_cart', JSON.stringify(existingCart))
    window.dispatchEvent(new Event('cartUpdated'))

    setAddedId(product.id)
    setTimeout(() => {
      setAddedId(null)
    }, 1500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-50 min-h-screen flex flex-col justify-between text-gray-800 space-y-12'>
      
      {/* Hero Slider Section with Category Buttons */}
      <div className='bg-gradient-to-r from-[#17153b] via-[#241e4e] to-[#12102e] text-white relative pt-16 pb-12 px-6 md:px-16 overflow-hidden flex flex-col justify-between shadow-md min-h-[600px]'>
        
        <button 
          onClick={prevSlide}
          className='absolute left-4 md:left-8 top-1/2 -translate-y-12 bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full shadow-lg transition z-20 cursor-pointer active:scale-95'
        >
          <ChevronLeft size={22} />
        </button>

        {/* Main Slide Content */}
        <div className='max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 my-auto'>
          <div className='space-y-4 pr-0 md:pr-6'>
            <p className='text-red-400 text-xs md:text-sm font-semibold tracking-wide'>
              {slides[currentIndex].tagline}
            </p>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight uppercase'>
              {slides[currentIndex].title}
            </h1>
            <p className='text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-3'>
              {slides[currentIndex].description}
            </p>
            <div className='pt-2'>
              <Link to="/products">
                <button className='bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-xl text-sm transition shadow-lg active:scale-95 cursor-pointer'>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          <div className='flex justify-center items-center relative'>
            <div className='w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-red-500/30 to-purple-500/30 absolute blur-2xl'></div>
            <div className='w-72 h-72 md:w-96 md:h-96 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl relative z-10 border-4 border-white/10'>
              <img 
                src={slides[currentIndex].image} 
                alt={slides[currentIndex].title} 
                className='max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105'
              />
            </div>
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className='absolute right-4 md:right-8 top-1/2 -translate-y-12 bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full shadow-lg transition z-20 cursor-pointer active:scale-95'
        >
          <ChevronRight size={22} />
        </button>

        {/* Bottom Category Navigation Pills */}
        <div className='max-w-7xl mx-auto w-full pt-10 mt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 z-10'>
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-6 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition cursor-pointer shadow-md ${
                currentIndex === idx
                  ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white ring-2 ring-white/30 scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {slide.category}
            </button>
          ))}
        </div>

      </div>

      {/* Banner Section */}
      <div className='max-w-7xl mx-auto w-full px-6'>
        <div className='relative py-24 px-6 md:px-16 text-center text-white bg-cover bg-center rounded-2xl shadow-md overflow-hidden' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80')` }}>
          <div className='max-w-3xl mx-auto space-y-4 relative z-10'>
            <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight'>
              Next-Gen Electronics at Your Fingertips
            </h2>
            <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
              Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
            </p>
            <div className='pt-4'>
              <Link to="/products">
                <button className='bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg text-sm transition shadow-md cursor-pointer active:scale-95'>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className='bg-[#0b1329] text-gray-300 pt-12 pb-6 px-6 md:px-16 mt-16 relative border-t border-gray-800'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800'>
          <div>
            <h2 className='text-2xl font-bold text-white mb-3'>
              <span className='text-red-500'>Z</span>aptro
            </h2>
            <p className='text-xs text-gray-400 mb-4'>Powering Your World with the Best in Electronics.</p>
            <p className='text-xs text-gray-400'>123 Electronics St, Style City, NY 10001</p>
            <p className='text-xs text-gray-400 mt-1'>Email: support@Zaptro.com</p>
            <p className='text-xs text-gray-400 mt-1'>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className='font-semibold text-white mb-4 text-sm'>Customer Service</h3>
            <ul className='space-y-2 text-xs text-gray-400'>
              <li><Link to="/contact" className='hover:text-white transition'>Contact Us</Link></li>
              <li><a href="#" className='hover:text-white transition'>Shipping & Returns</a></li>
              <li><a href="#" className='hover:text-white transition'>FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-white mb-4 text-sm'>Follow Us</h3>
            <div className='flex gap-4 text-gray-400'>
              <a href="#" className='hover:text-white transition'><FaFacebook size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaInstagram size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaTwitter size={18} /></a>
              <a href="#" className='hover:text-white transition'><FaPinterest size={18} /></a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-white mb-2 text-sm'>Stay in the Loop</h3>
            <div className='flex items-center'>
              <input type="email" placeholder="Your email address" className='bg-white text-gray-800 px-3 py-2 rounded-l-md text-xs w-full focus:outline-none' />
              <button className='bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 font-medium rounded-r-md transition cursor-pointer'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto pt-6 flex justify-between items-center text-xs text-gray-400 relative'>
          <p className='mx-auto'>© 2026 <span className='text-red-500 font-semibold'>Zaptro</span>. All rights reserved</p>
          <button onClick={scrollToTop} className='absolute right-0 bottom-2 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg shadow-md transition cursor-pointer'>
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>

    </div>
  )
}

export default Home