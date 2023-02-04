import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
    <section className="disCount background newarrivals">
        <div className="container">
                <div className='heading d_flex'>
                    <div className="heading-left flex-row f_flex">
                    <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                        <h2>Big Discounts</h2>
                    </div>
                    <div className="heading-right flex-row f_flex">
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <Dcard/>
        </div>
    </section>
    </>
  )
}

export default Discount
