import React from 'react';
import PropTypes from 'prop-types';
import KeyboardUtil from '../../util/KeyboardUtil';
import Styles from './EnglishKeyboard.scss';
import * as Images from '../../images';

const EnglishKeyboard = (props) => {
  const { english } = props;
  const { firstList, lastList, middleList } = KeyboardUtil.englishArrSplit(english, 9, 18);

  const handleToggleNumberKeyboardClick = () => {
    const { onToggleNumberKeyboard } = props;
    onToggleNumberKeyboard();
  };

  const handleToggleCaseClick = () => {
    const { onToggleCase } = props;
    onToggleCase();
  };

  const handleDeleteStringClick = () => {
    const { onDeleteString } = props;
    onDeleteString();
  };

  const handleChangeKeyboardNumber = (e) => {
    const { target: { innerText } } = e;
    const { onChangeKeyboardNumber } = props;
    onChangeKeyboardNumber(innerText);
  };

  const handleToggleSymbolKeyboardClick = () => {
    const { onToggleSymbolKeyboard } = props;
    onToggleSymbolKeyboard();
  };

  const renderFirstEnglishList = () => firstList.map(item => (
    <div
      role="none"
      onClick={handleChangeKeyboardNumber}
      className={Styles.root__first__item}
      key={item}
    >
      {item}
    </div>
  ));

  const renderMiddleEnglishList = () => middleList.map(item => (
    <div
      role="none"
      onClick={handleChangeKeyboardNumber}
      className={Styles.root__middle__item}
      key={item}
    >
      {item}
    </div>
  ));

  const renderLastEnglishList = () => lastList.map(item => (
    <div
      role="none"
      onClick={handleChangeKeyboardNumber}
      className={Styles.root__last__item}
      key={item}
    >
      {item}
    </div>
  ));

  const renderToggleKeyboardType = () => (
    <div className={Styles.root__keyboard}>
      <div
        role="none"
        onClick={handleToggleNumberKeyboardClick}
        className={Styles.root__keyboard__number}
      >
        123
      </div>
      <div
        className={Styles.root__keyboard__space}
      >
        space
      </div>
      <div
        role="none"
        onClick={handleToggleSymbolKeyboardClick}
        className={Styles.root__keyboard__symble}
      >
        #+=
      </div>
    </div>
  );

  return (
    <div className={Styles.root}>
      <div className={Styles.root__first}>
        {renderFirstEnglishList()}
      </div>
      <div className={Styles.root__middle}>
        {renderMiddleEnglishList()}
      </div>
      <div className={Styles.root__last}>
        <div
          role="none"
          onClick={handleToggleCaseClick}
          className={`${Styles.root__last__item} ${Styles.root__last__arrow}`}
        >
          <img src={Images.ICON_ARROW} alt="" />
        </div>
        {renderLastEnglishList()}
        <div
          role="none"
          onClick={handleDeleteStringClick}
          className={`${Styles.root__last__item} ${Styles.root__last__del}`}
        >
          <img src={Images.ICON_DELETE} alt="" />
        </div>
      </div>
      {renderToggleKeyboardType()}
    </div>
  );
};

EnglishKeyboard.propTypes = {
  english: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleNumberKeyboard: PropTypes.func.isRequired,
  onToggleCase: PropTypes.func.isRequired,
  onDeleteString: PropTypes.func.isRequired,
  onChangeKeyboardNumber: PropTypes.func.isRequired,
  onToggleSymbolKeyboard: PropTypes.func.isRequired,
};

export default EnglishKeyboard;
