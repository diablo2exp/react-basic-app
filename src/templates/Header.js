// Header.js
import React from 'react';
//import Slider from 'react-slick';
import './Header.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="header-container">
      {/*}
      <Slider {...settings}>
        <div>Slide 1</div>
      </Slider>
      {*/}
      <h1 classname="header-h1">Welcome to React</h1>
      <table className="header-table">
          <tr className='height-40'><td></td></tr>
          <tr className='height-10'><td></td></tr>
      </table>
    </div>
  );  
};

export default Header;