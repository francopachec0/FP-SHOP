import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 7000,
        cssEase: "linear"
    };
    return (
        <div className="py-0 px-8 pb-8 overflow-x-hidden">
            <Slider {...settings}>
                <div>
                    <img src={banner1} alt="b1" />
                </div>
                <div>
                    <img src={banner2} alt="b2" />
                </div>
                <div>
                    <img src={banner3} alt="b3" />
                </div>
            </Slider>
        </div>
        );
    }
}