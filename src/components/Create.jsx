import React from 'react'
import { Link } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc'
import { TfiEmail } from 'react-icons/tfi'
import {AiFillFacebook, AiFillApple} from 'react-icons/ai'

export const Create = () => {
  return (
    <div className='body'>
      <h2 className='intro-text'>Join Galactic</h2>
      <div className='p-tags'><p className='icon'><FcGoogle/></p><p className='text'>Sign up with Google</p></div>
      <div className='p-tags'><p className='icon'><AiFillFacebook/></p><p className='text'>Sign up with Facebook</p></div>
      <div className='p-tags'><p className='icon'><TfiEmail/></p><Link to="/createemail" ><p className='text'>Sign up with email</p></Link></div>

      <p className='end-text'>Already have an account? <span><Link to='/'>Sign in</Link></span></p>

      <footer>
        <p>Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
      </footer>
    </div>
  )
}
