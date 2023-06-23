import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Top100Movies from './Top100Movies';
import MovieDetail from './MovieDetail';

function Home() {
   
  return (
    <div className='home'>
      <Routes>
        <Route index element={<Top100Movies />}/>
        <Route path=':id' element={<MovieDetail />}/>
      </Routes>
    </div>
  )
}

export default Home