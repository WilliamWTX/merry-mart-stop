/**
 * Created by william on 2019/7/15 15:15
 * Develop by william on 2019/7/15 15:15
 */
import React from 'react';
import Proptypes from 'prop-types';
import * as Images from '../../../images';
import Styles from './DailyShopping.scss';
import DailyShoppingList from '../../../mock/index/DailyShopping';

const DailyShopping = (props) => {
  const { type } = props;

  const renderDailyShoppingItem = (data, index) => {
    const key = `key_${index}`;
    return (
      <div
        key={key}
        className={`${Styles.root__item} ${index < 4 ? Styles.root__item__style : null}`}
      >
        <div className={Styles.root__item__name}>
          {data.name}
        </div>
        <div className={Styles.root__item__title}>
          {data.title}
        </div>
        <img src={data.img} alt="" />
      </div>
    );
  };

  const renderDailyShoppingList = () => DailyShoppingList.map(
    (item, index) => renderDailyShoppingItem(item, index),
  );

  const renderDailyTitle = () => (
    <div className={Styles.root__title}>
      <img className={Styles.root__title__bg} src={Images.IMG_DAILY_SHOPPING} alt="" />
    </div>
  );
  const renderMasterTitle = () => (
    <div className={Styles.root__title}>
      <img className={Styles.root__title__bg} src={Images.IMG_MASTER_TITLE} alt="" />
    </div>
  );

  const renderContent = () => (
    <div className={Styles.root}>
      {type === 'daily' ? renderDailyTitle() : null}
      {type === 'master' ? renderMasterTitle() : null}
      <div className={Styles.root__list}>
        {renderDailyShoppingList()}
      </div>
    </div>
  );

  return renderContent();
};

DailyShopping.propTypes = {
  type: Proptypes.string.isRequired,
};

export default DailyShopping;
