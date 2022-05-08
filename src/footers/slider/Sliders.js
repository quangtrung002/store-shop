import React, { Component } from "react";
import Slider from "react-slick";
import  "./slider.scss"
export default class Sliders extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    return (
      <div className="sliders" >
        <Slider {...settings}>
          {Array.from({length:10}).map((item,index)=>(
            <div className="slider" key={index}>
              <img className="sliderImg" src={process.env.PUBLIC_URL + `/navbar/img${index+1}.jpg`}/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
