import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [isCheckout, setIsCheckout] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  
  // Checkout Form State (Daraz Style)
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: 'Jaranwala',
    paymentMethod: 'COD'
  })

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('zaptro_cart')) || []
    setCartItems(savedCart)
  }, [])

  const updateCartStorage = (updatedItems) => {
    setCartItems(updatedItems)
    localStorage.setItem('zaptro_cart', JSON.stringify(updatedItems))
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const increaseQty = (id) => {
    const updated = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    updateCartStorage(updated)
  }

  const decreaseQty = (id) => {
    const updated = cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
    updateCartStorage(updated)
  }

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id)
    updateCartStorage(updated)
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15.00
  const total = subtotal + shipping

  const handleInputChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    localStorage.removeItem('zaptro_cart')
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-between text-gray-800'>
      
      <div className='max-w-7xl mx-auto px-6 py-10 w-full flex-grow'>
        
        {/* Page Title */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
            Your Shopping <span className='text-red-600'>Cart</span>
          </h1>
          <p className='text-gray-500 text-sm mt-2'>
            Review your selected items before proceeding to checkout.
          </p>
        </div>

        {orderPlaced ? (
          // Order Success Screen (Daraz Style)
          <div className='text-center bg-white rounded-2xl p-12 shadow-md max-w-xl mx-auto animate-fade-in'>
            <CheckCircle2 size={64} className='mx-auto text-green-500 mb-4' />
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Order Placed Successfully!</h2>
            <p className='text-gray-600 text-sm mb-6'>
              Thank you <strong className='text-gray-900'>{shippingDetails.fullName}</strong>! Your order has been placed and will be delivered to <span className='text-red-600 font-medium'>{shippingDetails.address}, {shippingDetails.city}</span> shortly.
            </p>
            <Link to="/products">
              <button className='bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl text-sm font-medium transition shadow-md'>
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : cartItems.length === 0 ? (
          // Empty Cart View
          <div className='text-center bg-white rounded-2xl p-12 shadow-sm max-w-xl mx-auto'>
            <ShoppingBag size={64} className='mx-auto text-gray-300 mb-4' />
            <h2 className='text-xl font-bold text-gray-800 mb-2'>Your cart is empty</h2>
            <p className='text-gray-500 text-sm mb-6'>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products">
              <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-md'>
                Explore Products
              </button>
            </Link>
          </div>
        ) : !isCheckout ? (
          // Cart Items Grid & Summary
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-4'>
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className='bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4'
                >
                  <div className='flex items-center gap-4 w-full sm:w-auto'>
                    <div className='w-20 h-20 bg-gray-50 rounded-xl p-2 flex-shrink-0 flex items-center justify-center border border-gray-100'>
                      <img src={item.image} alt={item.title} className='max-h-full max-w-full object-contain' />
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 text-sm sm:text-base mb-1'>{item.title}</h3>
                      <p className='text-red-600 font-extrabold text-sm'>${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='flex items-center justify-between w-full sm:w-auto gap-6'>
                    <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                      <button 
                        onClick={() => decreaseQty(item.id)}
                        className='px-3 py-1.5 bg-gray-50 hover:bg-gray-200 text-gray-700 transition'
                      >
                        <Minus size={14} />
                      </button>
                      <span className='px-4 py-1.5 text-sm font-bold text-gray-900'>{item.quantity}</span>
                      <button 
                        onClick={() => increaseQty(item.id)}
                        className='px-3 py-1.5 bg-gray-50 hover:bg-gray-200 text-gray-700 transition'
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
                      className='text-gray-400 hover:text-red-600 transition p-2'
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-fit'>
              <h3 className='text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100'>Order Summary</h3>
              
              <div className='space-y-3 text-sm text-gray-600 mb-6'>
                <div className='flex justify-between'>
                  <span>Subtotal</span>
                  <span className='font-semibold text-gray-900'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span className='font-semibold text-gray-900'>
                    {shipping === 0 ? <span className='text-green-600 font-bold'>Free</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className='border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900'>
                  <span>Total</span>
                  <span className='text-red-600'>${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => setIsCheckout(true)}
                className='w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl text-sm transition shadow-md active:scale-95 cursor-pointer'
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          // Daraz Style Checkout Form
          <div className='max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
            <div className='flex items-center justify-between mb-6 pb-4 border-b border-gray-100'>
              <h2 className='text-xl font-bold text-gray-900 flex items-center gap-2'>
                <MapPin className='text-red-600' size={20} /> Shipping & Payment Details
              </h2>
              <button 
                onClick={() => setIsCheckout(false)}
                className='text-xs text-red-600 font-semibold hover:underline'
              >
                ← Back to Cart
              </button>
            </div>

            <form onSubmit={handlePlaceOrder} className='space-y-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-gray-700 mb-1'>Full Name</label>
                  <input 
                    type='text' 
                    name='fullName'
                    required
                    value={shippingDetails.fullName}
                    onChange={handleInputChange}
                    placeholder='Amna Irfan'
                    className='w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-700 mb-1'>Phone Number</label>
                  <input 
                    type='tel' 
                    name='phone'
                    required
                    value={shippingDetails.phone}
                    onChange={handleInputChange}
                    placeholder='+92 300 1234567'
                    className='w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-semibold text-gray-700 mb-1'>Delivery Address</label>
                <input 
                  type='text' 
                  name='address'
                  required
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  placeholder='House #123, Street Name, Area'
                  className='w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-xs font-semibold text-gray-700 mb-1'>City</label>
                  <input 
                    type='text' 
                    name='city'
                    required
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    className='w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-700 mb-1'>Payment Method</label>
                  <select 
                    name='paymentMethod'
                    value={shippingDetails.paymentMethod}
                    onChange={handleInputChange}
                    className='w-full border border-gray-300 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white'
                  >
                    <option value='COD'>Cash on Delivery (COD)</option>
                    <option value='Card'>Credit / Debit Card</option>
                    <option value='Wallet'>JazzCash / EasyPaisa</option>
                  </select>
                </div>
              </div>

              <div className='bg-gray-50 p-4 rounded-xl flex items-center justify-between text-sm mt-4'>
                <span className='font-medium text-gray-600'>Total Payable Amount:</span>
                <span className='font-bold text-red-600 text-lg'>${total.toFixed(2)}</span>
              </div>

              <button 
                type='submit'
                className='w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl text-sm transition shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2'
              >
                <ShieldCheck size={18} /> Pay to Proceed (${total.toFixed(2)})
              </button>
            </form>
          </div>
        )}

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

export default Cart