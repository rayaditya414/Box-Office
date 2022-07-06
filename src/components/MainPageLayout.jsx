import React from 'react'
import Navbar from './Navbar'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
        <Title title="Box OFFice" subtitle="Are you looking for a movie or a actor?"/>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainPageLayout