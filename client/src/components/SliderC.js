import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "./Card";

export default function SliderC({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='mt-20 ml-7'>
      <Slider {...settings}>
        {data.map((item) => (
          <Link key={item.id} to={`/property/${item.id}`}>
            <Card location={item.location} price={item.price} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
