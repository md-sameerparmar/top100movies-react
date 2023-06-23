import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='main-left'>
            <h1 style={{fontSize:'2rem'}}>100 Best Movies of All Time That You Should Watch Immediately</h1>
            <button><Link to={'/movie'}>Check Them Now</Link></button>
        </div>

        <div className='main-right'>
            <img src='https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg'
            className='main-right-img' />
        </div>
    </div>
  )
}

export default Dashboard