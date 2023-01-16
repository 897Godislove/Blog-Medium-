import React from 'react'
import { Link } from "react-router-dom"

export const CreateEmail = () => {
  return (
    <div className='body body2'>
        <h2 className="intro-text">Sign up with email</h2>
        <p className='desc'>Enter your email address to create an account.</p>

        <form>
            <label className='items' htmlFor="">Your email</label>
            <input className='items next' type="text" />
            <button className='items but'>continue</button>
      </form>

      <p className='end'><Link to='/create'> All sign up options </Link></p>

    </div>
  )
}

