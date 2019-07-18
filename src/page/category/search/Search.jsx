/**
 * Created by william on 2019/7/18 17:31
 * Develop by william on 2019/7/18 17:31
 */
import React from 'react';
import * as Images from '../../../images';
import Styles from './Search.scss';

const Search = () => {
  const renderMenu = () => (
    <img className={Styles.root__menu} src={Images.ICON_MENU} alt="" />
  );

  const renderGoBackImg = () => (
    <img className={Styles.root__back} src={Images.ICON_GO_BACK} alt="" />
  );

  const renderSearchInput = () => (
    <input type="text" placeholder="小天鹅洗衣机" />
  );

  const renderSearchContent = () => (
    <div className={Styles.root}>
      {renderGoBackImg()}
      {renderSearchInput()}
      {renderMenu()}
    </div>
  );

  return renderSearchContent();
};

export default Search;
