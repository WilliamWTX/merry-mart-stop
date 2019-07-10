/**
 * Created by william on 2019/7/9 16:20
 * Develop by william on 2019/7/9 16:20
 */
import React from 'react';
import Swiper from 'swiper';
import * as Images from '../../../images';
import 'swiper/dist/css/swiper.min.css';
import Styles from './Swiper.scss';

const imgList = () => [
  Images.IMG_SWIPER1,
  Images.IMG_SWIPER2,
  Images.IMG_SWIPER3,
  Images.IMG_SWIPER4,
  Images.IMG_SWIPER5,
];

const SwiperComponent = () => {
  let swiperPaginationRef = null;
  // eslint-disable-next-line no-unused-vars
  let swiper = null;
  const bindSwiperPagination = (ref) => {
    if (ref) {
      swiperPaginationRef = ref;
    }
  };

  const bindSwiperRef = (ref) => {
    if (ref && swiperPaginationRef) {
      swiper = new Swiper(ref, {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: swiperPaginationRef,
        },
      });
    }
  };

  const swiperSlide = () => imgList().map((item, index) => {
    const key = `key_${index}`;
    return (
      <div key={key} className="swiper-slide">
        <img className={Styles.root__img} src={item} alt="" />
      </div>
    );
  });

  const swiperContent = () => (
    <div className={Styles.root} ref={bindSwiperRef}>
      <div className="swiper-wrapper">
        {swiperSlide()}
      </div>
      <div className={Styles.root__pagination} ref={bindSwiperPagination} />
    </div>
  );

  return swiperContent();
};

export default SwiperComponent;
