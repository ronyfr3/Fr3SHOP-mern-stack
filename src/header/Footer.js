import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <p>Follow me on</p>
           <div className='anmsc'>
           <a href='https://www.facebook.com/hype.rony.9/'>
             <p className='fb'>Facebook</p>
            </a>
            <a href='https://github.com/ronyfr3'>
             <p className='git'>Github</p>
            </a>
           </div>
            <p className='ccc'>Contact me</p>
            <small className='gm'>rakib.devatmern@gmail.com</small>
        </footer>
    )
}

export default Footer
