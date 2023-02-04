import React from 'react'
import Head from './Head'
import NavBar from './NavBar'
import Search from './Search'
import './Header.css'
const Header = ({cartItem}) => {
  return (
    <>
      <Head/>
      <Search cartItem={cartItem}/>
      <NavBar/>
    </>
  )
}

export default Header
