import React from 'react'
import { Link } from "react-router-dom"
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { TfiEmail } from 'react-icons/tfi'
import {AiFillFacebook, AiFillApple} from 'react-icons/ai'

export const Signin = () => {
  return (
    <div className='body'>
      <h2 className='intro-text'>Welcome back.</h2>
      <div className='p-tags'><p className='icon'><FcGoogle/></p><p className='text'>Sign in with Google</p></div>
      <div className='p-tags'><p className='icon'><AiFillFacebook/></p><p className='text'>Sign in with Facebook</p></div>
      <div className='p-tags'><p className='icon'><AiFillApple/></p><p className='text'>Sign in with Apple</p></div>
      <div className='p-tags'><p className='icon'><FaTwitter/></p><p className='text'>Sign in with Twitter</p></div>
      <div className='p-tags'><p className='icon'><TfiEmail/></p><Link to="signinemail" ><p className='text'>Sign in with email</p></Link></div>

      <p className='end-text'>No account? <span><Link to='create'>Create one</Link></span></p>

      <footer>
        <p>Forgot email or trouble signing in? <a href="https://help.medium.com/hc/en-us/requests/new?ticket_form_id=9455427953559&form=true&source=login--------------------------creator_tools_page_nav_signin-----------">Get help</a></p>
        <p className='last'>Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
      </footer>
    </div>
  )
}
