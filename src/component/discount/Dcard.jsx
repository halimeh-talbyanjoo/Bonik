import React from 'react'
import Data from './Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    margin: 200
  }
  return (
    <>
    <Slider {...settings}>
        {
          Data.map((value,index)=>{
            return(
              <>
              <div className=" product" key={index}>
                <div className="box1">
                  <div className="img">
                  <img src={value.cover} alt='' style={{width:'100%'}} />
                  </div>
                  <h4 style={{fontSize:'20px' , fontWeight:"500"}}>{value.name}</h4>
                  <span>{value.price}</span>
                  </div>
              </div>
              </>
          )
          })
        }
        </Slider>
    </>
  )
}

export default Dcard
