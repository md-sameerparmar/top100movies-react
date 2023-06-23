import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <h2 className='bg-yellow text-black' style={{margin: '0px'}}>IMDb</h2>
        <ul>
            <li>Top 100</li>
        </ul>
    </div>
  )
}

export default Header