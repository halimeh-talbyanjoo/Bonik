import React from 'react'
import TopCart from './TopCart'
import './style.css'


const TopCate = () => {
  return (
    <>
      <section className='topCat background'>
        <div className="container">
            <div className='heading d_flex'>
                <div className="heading-left flex-row f_flex">
                    <i className='fa fa-border-all'></i>
                    <h2>Top Categories</h2>
                </div>
                <div className="heading-right flex-row f_flex">
                    <span>View all</span>
                    <i className='fa fa-caret-right'></i>
                </div>
            </div>
            <TopCart/>
        </div>
      </section>
    </>
  )
}

export default TopCate
