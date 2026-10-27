import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, ShoppingCart } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [addedId, setAddedId] = useState(null) // Button feedback state

  const productsList = [
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
    },
    {
      id: 5,
      title: 'MacBook Pro 16" M3 Max',
      category: 'Laptop',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      title: 'Smart Coffee Maker Machine',
      category: 'Appliances',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60'
    }
  ]

  const categories = ['All', 'Audio', 'Gaming', 'Mobile', 'TV', 'Laptop', 'Appliances']

  const filteredProducts = selectedCategory === 'All' 
    ? productsList 
    : productsList.filter(item => item.category === selectedCategory)

  // Add to Cart with visual feedback
  const addToCart = (product) => {
    let existingCart = JSON.parse(localStorage.getItem('zaptro_cart')) || []
    const itemIndex = existingCart.findIndex(item => item.id === product.id)

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1
    } else {
      existingCart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('zaptro_cart', JSON.stringify(existingCart))

    // Trigger button text change for 1.5 seconds
    setAddedId(product.id)
    setTimeout(() => {
      setAddedId(null)
    }, 1500)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-between text-gray-800'>
      
      <div className='max-w-7xl mx-auto px-6 py-10 w-full flex-grow'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
            Explore Our <span className='text-red-600'>Products</span>
          </h1>
          <p className='text-gray-500 text-sm mt-2'>
            Discover the latest gadgets and electronics at unbeatable prices.
          </p>
        </div>

        {/* Category Filters */}
        <div className='flex flex-wrap items-center justify-center gap-3 mb-10'>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className='bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group'
            >
              <div className='h-56 bg-gray-50 overflow-hidden relative flex items-center justify-center p-4'>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className='max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300'
                />
                <span className='absolute top-3 left-3 bg-red-100 text-red-600 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md'>
                  {product.category}
                </span>
              </div>

              <div className='p-6 flex flex-col flex-grow justify-between'>
                <div>
                  <h3 className='font-bold text-gray-900 text-base mb-2 line-clamp-2'>
                    {product.title}
                  </h3>
                  <p className='text-red-600 font-extrabold text-lg mb-4'>
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  className={`w-full py-2.5 rounded-lg text-sm font-medium transition shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer ${
                    addedId === product.id 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  <ShoppingCart size={16} /> 
                  {addedId === product.id ? 'Added ✓' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
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
              <button className='bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 font-medium rounded-r-md transition'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto pt-6 flex justify-between items-center text-xs text-gray-400 relative'>
          <p className='mx-auto'>© 2026 <span className='text-red-500 font-semibold'>Zaptro</span>. All rights reserved</p>
          <button onClick={scrollToTop} className='absolute right-0 bottom-2 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg shadow-md transition'>
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>

    </div>
  )
}

export default Products