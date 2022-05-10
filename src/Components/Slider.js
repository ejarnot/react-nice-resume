import React from "react"
import Slider from "react-slick"

function SimpleSlider(props){
    let settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}

export default SimpleSlider