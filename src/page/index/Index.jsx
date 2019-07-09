/**
 * Created by william on 2019/7/2 10:42
 * Develop by william on 2019/7/2 10:42
 */
import React from 'react';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Search from './search/Search';
import Styles from './Index.scss';
import Swiper from './swiper/Swiper';

const IndexComponent = () => {
  const renderSearch = () => (
    <div className={Styles.root__search}>
      <Search />
    </div>
  );

  const renderSwiper = () => (
    <Swiper />
  );


  const renderIndexContent = () => (
    <div className={Styles.root}>
      {renderSearch()}
      {renderSwiper()}
      <NavigationBar />
    </div>
  );

  return renderIndexContent();
};

export default IndexComponent;
