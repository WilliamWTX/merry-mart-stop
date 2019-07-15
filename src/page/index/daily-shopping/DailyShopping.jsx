/**
 * Created by william on 2019/7/15 15:15
 * Develop by william on 2019/7/15 15:15
 */
import React from 'react';
import * as Images from '../../../images';

const DailyShopping = () => {
  const renderDailyShoppingList = () => {

  };
  const renderTitle = () => (
    <img src={Images.IMG_DAILY_SHOPPING} alt="" />
  );

  const renderContent = () => (
    <div>
      {renderDailyShoppingList()}
      {renderTitle()}
    </div>
  );

  return renderContent();
};

export default DailyShopping;
