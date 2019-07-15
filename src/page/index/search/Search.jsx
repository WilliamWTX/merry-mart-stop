/**
 * Created by william on 2019/7/9 11:43
 * Develop by william on 2019/7/9 11:43
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Search.scss';
import * as Images from '../../../images';

const Search = (props) => {
  const { pageScrollHeight } = props;
  const handleLoginClick = () => {
    const { onLogin } = props;
    onLogin();
  };

  const renderSearchInput = () => (
    <div className={Styles.root__search}>
      <img src={Images.ICON_LOGO_TRANSPARENT} alt="" />
      <div className={Styles.root__search__input}>
        <img src={Images.ICON_SEARCH} alt="" />
        <input disabled placeholder="请输入要搜索的商品" type="text" />
      </div>
      <div
        role="none"
        className={Styles.root__search__login}
        onClick={handleLoginClick}
      >
        登录
      </div>
    </div>
  );

  const renderContent = () => (
    <div className={`${Styles.root} ${pageScrollHeight ? Styles.root__bg : null}`}>
      {renderSearchInput()}
    </div>
  );

  return renderContent();
};

Search.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Search;
