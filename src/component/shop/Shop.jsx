import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'
import './style.css'

const Shop = ({shopItems,addToCart}) => {
  return (
    <>
      <section className='shop background'>
        <div className="container d_flex">
            <Catg/>
            <div className="contentWidth">
            <div className='heading d_flex'>
                    <div className="heading-left flex-row f_flex">
                        <h2>mobile Phones</h2>
                    </div>
                    <div className="heading-right flex-row f_flex">
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <div className="product-content grid1">
                    <ShopCart shopItems={shopItems} addToCart={addToCart}/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Shop
