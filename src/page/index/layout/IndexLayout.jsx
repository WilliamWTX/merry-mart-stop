/**
 * Created by william on 2019/7/12 16:48
 * Develop by william on 2019/7/12 16:48
 */
import React from 'react';
import PropTypes from 'prop-types';
import Swiper from '../swiper/Swiper';
import Styles from './IndexLayout.scss';
import Search from '../search/Search';
import NavigationBar from '../../../components/navigation-bar/NavigationBar';
import GoodsType from '../goods-type/GoodsType';

const IndexLayout = (props) => {
  const handleLogin = () => {
    const { onLogin } = props;
    onLogin();
  };

  const renderSearch = () => (
    <div className={Styles.root__search}>
      <Search
        onLogin={handleLogin}
      />
    </div>
  );
  const renderSwiper = () => (
    <Swiper />
  );

  const renderGoodsType = () => (
    <GoodsType />
  );

  const renderIndexContent = () => (
    <div className={Styles.root}>
      {renderSearch()}
      {renderSwiper()}
      {renderGoodsType()}
      <NavigationBar />
    </div>
  );

  return renderIndexContent();
};

IndexLayout.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default IndexLayout;
