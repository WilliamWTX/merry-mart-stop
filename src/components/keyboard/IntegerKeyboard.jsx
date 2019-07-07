import React from 'react';
import PropTypes from 'prop-types';
import KeyboardUtil from '../../util/KeyboardUtil';
import Styles from './IntegerKeyboard.scss';
import * as Images from '../../images';

const IntegerKeyBoard = (props) => {
  const keyBoardNumber = KeyboardUtil.keyboardNumber();

  const handleToggleKeyboardEnglishClick = () => {
    const { onToggleKeyboardEnglish } = props;
    onToggleKeyboardEnglish();
  };

  const IntegerNumber = (data) => {
    const key = `key_${data.index}`;
    if (data.number === 'ABC') {
      return (
        <div
          role="none"
          onClick={handleToggleKeyboardEnglishClick}
          key={key}
          className={`${Styles.root__item} ${Styles.root__english}`}
        >
          {data.number}
        </div>
      );
    }

    if (data.number === 'del') {
      return (
        <div
          key={key}
          className={`${Styles.root__item} ${Styles.root__del}`}
        >
          <img src={Images.ICON_DELETE} alt="" />
        </div>
      );
    }

    return (
      <div key={key} className={Styles.root__item}>
        {data.number}
      </div>
    );
  };

  const IntegerNumbers = () => keyBoardNumber.map(
    (number, index) => IntegerNumber({ number, index }),
  );
  return (
    <div className={Styles.root}>
      {IntegerNumbers()}
    </div>
  );
};

IntegerKeyBoard.propTypes = {
  onToggleKeyboardEnglish: PropTypes.func.isRequired,
};

export default IntegerKeyBoard;
