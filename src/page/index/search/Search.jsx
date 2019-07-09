/**
 * Created by william on 2019/7/9 11:43
 * Develop by william on 2019/7/9 11:43
 */
import React from 'react';
import Styles from './Search.scss';
import * as Images from '../../../images';

const Search = () => {
  const renderSearchInput = () => (
    <div className={Styles.root__search}>
      <img src={Images.ICON_LOGO_BG} alt="" />
      <div className={Styles.root__search__input}>
        <img src={Images.ICON_SEARCH} alt="" />
        <input disabled placeholder="请输入要搜索的商品" type="text" />
      </div>
      <div className={Styles.root__search__login}>
          登录
      </div>
    </div>
  );

  const renderContent = () => (
    <div className={Styles.root}>
      {renderSearchInput()}
    </div>
  );

  return renderContent();
};

export default Search;
