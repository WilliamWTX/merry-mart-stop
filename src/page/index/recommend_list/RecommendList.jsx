/**
 * Created by william on 2019/7/16 10:35
 * Develop by william on 2019/7/16 10:35
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as Images from '../../../images';
import Styles from './RecommendList.scss';
import GoodsUtil from '../../../util/GoodsUtil';

const RecommendList = (props) => {
  const { recommendListData } = props;

  const renderRecommendItem = (data, index) => {
    const key = `key_${index}`;
    return (
      <div className={Styles.root__list__item} key={key}>
        <img src={data.image} alt="" />
        <div className={Styles.root__list__item__detail}>
          <div className={Styles.root__list__item__name}>
            {data.name}
          </div>
          <div className={Styles.root__list__item__price}>
            <div>
              {data.price}
            </div>
            <div>
              {GoodsUtil.goodsType()[data.shipping]}
            </div>
          </div>
          <div className={Styles.root__list__item__shop}>
            {data.shop}
          </div>
        </div>
      </div>
    );
  };

  const renderRecommendList = () => {
    if (!recommendListData || !recommendListData.length) {
      return null;
    }
    return recommendListData.map((item, index) => renderRecommendItem(item, index));
  };

  const renderRecommendTitle = () => (
    <div className={Styles.root__title}>
      <img src={Images.IMG_RECOMMEND_TITLE} alt="" />
    </div>
  );

  const renderRecommendContainer = () => (
    <div className={Styles.root}>
      {renderRecommendTitle()}
      <div className={Styles.root__list}>
        {renderRecommendList()}
      </div>
    </div>
  );

  return renderRecommendContainer();
};

RecommendList.propTypes = {
  recommendListData: PropTypes.arrayOf(PropTypes.shape()),
};
RecommendList.defaultProps = {
  recommendListData: null,
};

export default RecommendList;
