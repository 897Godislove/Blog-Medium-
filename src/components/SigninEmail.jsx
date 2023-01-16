import React from 'react'
import { Link } from "react-router-dom"

export const SigninEmail = () => {

  return (
    <div className='body body2'>
      <h2 className="intro-text">Sign in with email</h2>
      <p className='desc'>Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>

      <form>
        <label className='items' htmlFor="">Your email</label>
        <input className='items next' type="text" />
        <button className='items but'>Continue</button>
      </form>
      
      <p className='end'><Link to='/'> All sign in options </Link></p>
    </div>
  )
}
