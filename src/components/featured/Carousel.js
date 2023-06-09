import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide_three from "../../resources/images/slide_onea.jpg" ;
import Slide_two from "../../resources/images/slide_two2.jpg" ;
import Slide_one from "../../resources/images/slide_three3.jpg" ;

const Carousel =()=>{

const setting={
    dots:false,
    infinite:true,
    autoplay:true,
    speed:500
}


    return(
<div
className="carousel_wrapper"
style={{
    height :`${window.innerHeight}px`
}}

>
    <Slider {...setting}> 
        <div>
        <div
                        className="carrousel_image"
                        style={{
                            background:`url(${Slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>


        </div>
        <div>
        <div
                        className="carrousel_image"
                        style={{
                            background:`url(${Slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>

        </div>
        <div>
        <div
                        className="carrousel_image"
                        style={{
                            background:`url(${Slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>

        </div>
    </Slider>



</div>


    )
}
export default Carousel;