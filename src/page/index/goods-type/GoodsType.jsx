/**
 * Created by william on 2019/7/12 16:48
 * Develop by william on 2019/7/12 16:48
 */
import React from 'react';
import List from '../../../mock/index/GoodsType';
import Styles from './GoodsType.scss';

const GoodsType = () => {
  const renderGoodsTypeItem = (data, index) => {
    const key = `key_${index}`;
    return (
      <div key={key} className={Styles.root__item}>
        <img src={data.image} alt="" />
        <div>
          {data.name}
        </div>
      </div>
    );
  };
  const renderGoodsType = () => (
    <div className={Styles.root}>
      {
        (() => List.map((item, index) => renderGoodsTypeItem(item, index)))()
      }
    </div>
  );

  return renderGoodsType();
};

export default GoodsType;
