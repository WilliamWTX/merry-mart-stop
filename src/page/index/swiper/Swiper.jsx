/**
 * Created by william on 2019/7/9 16:20
 * Develop by william on 2019/7/9 16:20
 */
import React, { useState, useEffect } from 'react';
import * as Images from '../../../images';
import Styles from './Swiper.scss';

const imgList = () => [
  Images.IMG_SWIPER1,
  Images.IMG_SWIPER2,
  Images.IMG_SWIPER3,
  Images.IMG_SWIPER4,
  Images.IMG_SWIPER5,
];

const ImageAutoPlayComponent = () => {
  const [imageList, setImageList] = useState(imgList());
  let imageRef = null;
  console.log(setImageList);
  useEffect(() => {
    if (imageRef) {
      imageRef.style.width = document.body.clientWidth;
      console.log(imageRef.style);
    }
  });
  const bindImageSlideItem = (ref) => {
    if (ref) {
      imageRef = ref;
    }
  };

  const imageAutoPlaySlide = () => imageList.map((item, index) => {
    const key = `key_${index}`;
    return (
      <div
        ref={bindImageSlideItem}
        key={key}
        className={Styles.root__slide}
      >
        <img src={item} alt="" />
      </div>
    );
  });

  const imageAutoPlayContent = () => (
    <div className={Styles.root}>
      <div className={Styles.root__wrapper}>
        {imageAutoPlaySlide()}
      </div>
    </div>
  );
  return imageAutoPlayContent();
};

export default ImageAutoPlayComponent;
