/**
 * Created by william on 2019/7/3 15:14
 * Develop by william on 2019/7/3 15:14
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardUtil from '../../util/KeyboardUtil';
import Styles from './IntegerKeyBoard.scss';
import * as Images from '../../images';

const IntegerKeyBoard = (props) => {
  const { numbers } = props;
  const [keyboardNumbers] = useState(KeyboardUtil.IntegerKeyBoardNumber());
  const [number, setNumber] = useState(numbers || '');

  const handleChangeNumberClick = (e) => {
    const newNumber = `${number}${e.target.innerText}`;
    const { onChangeNumber, numberLength } = props;
    if (numberLength) {
      if (newNumber.length <= numberLength) {
        setNumber(newNumber);
        onChangeNumber(newNumber);
      }
    } else {
      setNumber(newNumber);
      onChangeNumber(newNumber);
    }
  };

  const handleClearNumbersClick = () => {
    const { onChangeNumber } = props;
    if (number) {
      setNumber('');
      onChangeNumber('');
    }
  };

  const handleSubmitNumberClick = () => {
    const { numberLength, onSubmitNumber } = props;
    if (numberLength) {
      if (numberLength === number.length) {
        onSubmitNumber(number);
      }
    } else {
      onSubmitNumber(number);
    }
  };

  const handleDeleteNumber = () => {
    const newNumber = number.slice(0, number.length - 1);
    const { numberLength, onChangeNumber } = props;
    if (numberLength && newNumber.length >= 0) {
      if (newNumber.length <= numberLength) {
        setNumber(newNumber);
        onChangeNumber(newNumber);
      }
    } else {
      setNumber(newNumber);
      onChangeNumber(newNumber);
    }
  };

  const renderKeyboardNumbers = () => keyboardNumbers.map((item, index) => {
    const key = `key_${index}`;
    if (index === keyboardNumbers.length - 1) {
      return (
        <div
          role="none"
          onClick={handleChangeNumberClick}
          className={`${Styles.root__content__item} ${Styles.root__content__zoo}`}
          key={key}
        >
          {item}
        </div>
      );
    }
    return (
      <div
        role="none"
        onClick={handleChangeNumberClick}
        className={Styles.root__content__item}
        key={key}
      >
        {item}
      </div>
    );
  });

  const renderKeyboardSymbol = () => (
    <div className={Styles.root__content__symbol}>
      <div
        className={Styles.root__content__symbol__del}
        role="none"
        onClick={handleDeleteNumber}
      >
        <img src={Images.ICON_DELETE} alt="" />
      </div>
      <div
        role="none"
        onClick={handleClearNumbersClick}
        className={Styles.root__content__symbol__clear}
      >
        清除
      </div>
      <div
        role="none"
        onClick={handleSubmitNumberClick}
        className={Styles.root__content__symbol__submit}
      >
        确定
      </div>
    </div>
  );

  const renderKeyBoardHeader = () => (
    <div className={Styles.root__content__header}>
      美廉美安全输入
    </div>
  );

  return (
    <div className={Styles.root}>
      <div className={Styles.root__content}>
        {renderKeyBoardHeader()}
        <div className={Styles.root__content__number}>
          {renderKeyboardNumbers()}
        </div>
        <div className={Styles.root__content__symbol}>
          {renderKeyboardSymbol()}
        </div>
      </div>
    </div>
  );
};

IntegerKeyBoard.propTypes = {
  onChangeNumber: PropTypes.func.isRequired,
  onSubmitNumber: PropTypes.func.isRequired,
  numbers: PropTypes.string.isRequired,
  numberLength: PropTypes.number,
};
IntegerKeyBoard.defaultProps = {
  numberLength: null,
};

export default IntegerKeyBoard;
