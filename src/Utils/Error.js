import React from 'react'
import {Link} from 'react-router-dom'
import './Handler.css'

const Error = ({error}) => {
    return (
        <div className='error'>
            <p className='err'>{error}</p>
            <Link to='/'>
            <small style={{fontSize:'15px'}}>Back To Shop</small>
            </Link>
        </div>
    )
}

export default Error
