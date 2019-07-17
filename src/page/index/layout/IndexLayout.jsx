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
import DailyShopping from '../daily-shopping/DailyShopping';
import RecommendList from '../recommend_list/RecommendList';

let scrollContainerRef = null;

const IndexLayout = (props) => {
  const { pageScrollHeight, recommendListData, tabIndex } = props;
  const handleLogin = () => {
    const { onLogin } = props;
    onLogin();
  };

  const handleScrollDataList = () => {
    const { onScrollData } = props;
    if (scrollContainerRef) {
      onScrollData(scrollContainerRef);
    }
  };

  const handleChangeTab = (index) => {
    const { onChangeTab } = props;
    onChangeTab(index);
  };

  const renderSearch = () => (
    <div className={Styles.root__search}>
      <Search
        onLogin={handleLogin}
        pageScrollHeight={pageScrollHeight}
      />
    </div>
  );
  const renderSwiper = () => (
    <Swiper />
  );

  const renderGoodsType = () => (
    <GoodsType />
  );

  const renderDailyShopping = type => (
    <DailyShopping type={type} />
  );

  const renderRecommendList = () => (
    <RecommendList
      recommendListData={recommendListData}
    />
  );

  const renderIndexContent = () => (
    <div className={Styles.root}>
      {renderSearch()}
      <div
        className={Styles.root__data}
        ref={(el) => {
          scrollContainerRef = el;
        }}
        onScroll={handleScrollDataList}
      >
        {renderSwiper()}
        {renderGoodsType()}
        {renderDailyShopping('daily')}
        {renderDailyShopping('master')}
        {renderRecommendList()}
      </div>
      <NavigationBar
        onChangeTab={handleChangeTab}
        tabIndex={tabIndex}
      />
    </div>
  );

  return renderIndexContent();
};

IndexLayout.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onScrollData: PropTypes.func.isRequired,
  onChangeTab: PropTypes.func.isRequired,
  recommendListData: PropTypes.arrayOf(PropTypes.shape()),
  pageScrollHeight: PropTypes.number,
  tabIndex: PropTypes.number.isRequired,
};
IndexLayout.defaultProps = {
  pageScrollHeight: null,
  recommendListData: null,
};

export default IndexLayout;
