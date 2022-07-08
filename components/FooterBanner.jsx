import React from 'react'
import { IoMdSend } from 'react-icons/io'

const FooterBanner = () => {
  return (
    <div className='newsletter-container'>
      <h1>Newsletter</h1>
      <div className='newsletter-desc'>Sign up for exclusive offers and up to 15% your first purchase.</div>
      <div className='newsletter-input-container'>
        <input placeholder='Your email' />
        <button>
          <IoMdSend />
        </button>
      </div>
    </div>
  )
}

export default FooterBanner