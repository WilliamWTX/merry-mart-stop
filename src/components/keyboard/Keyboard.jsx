import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IntegerKeyboard from './IntegerKeyboard';
import Styles from './Keyboard.scss';
import KeyboardUtil from '../../util/KeyboardUtil';
import EnglishKeyboard from './EnglishKeyboard';

const Keyboard = (props) => {
  const { keyboardNumbers } = props;
  const [numberKeyboard, setNumberKeyboard] = useState(true);
  const [english, setEnglish] = useState(KeyboardUtil.keyboardLowercaseEnglishList());
  const [isLowercaseEnglish, setIsLowercaseEnglish] = useState(true);
  const [keyboardNumber, setKeyboardNumber] = useState(keyboardNumbers || '');

  useEffect(() => {
    setKeyboardNumber(keyboardNumbers);
  });

  /* 切换键盘为英文键盘 */
  const handleToggleKeyboardEnglish = () => {
    setNumberKeyboard(false);
  };

  /* 切换键盘为数字键盘 */
  const handleToggleNumberKeyboard = () => {
    setNumberKeyboard(true);
  };

  /* 删除键盘数字 */
  const handleDeleteString = () => {
    if (keyboardNumber) {
      const { onChangeKeyboardNumber } = props;
      const newKeyboardNumber = keyboardNumber.slice(0, keyboardNumber.length - 1);
      setKeyboardNumber(newKeyboardNumber);
      onChangeKeyboardNumber(newKeyboardNumber);
    }
  };

  /* 大小写切换 */
  const handleToggleCase = () => {
    if (isLowercaseEnglish) {
      setIsLowercaseEnglish(false);
      setEnglish(KeyboardUtil.keyboardCapitalEnglishList());
    } else {
      setIsLowercaseEnglish(true);
      setEnglish(KeyboardUtil.keyboardLowercaseEnglishList());
    }
  };

  /* 输入键盘数字 */
  const handleChangeKeyboardNumber = (value) => {
    const newKeyboardNumber = `${keyboardNumber}${value}`;
    const { onChangeKeyboardNumber } = props;
    onChangeKeyboardNumber(newKeyboardNumber);
    setKeyboardNumber(newKeyboardNumber);
  };

  const handleCompleteInputClick = () => {
    const { onCompleteInput } = props;
    onCompleteInput();
  };

  /* 切换键盘为符号键盘 --- 以后有机会开发，暂时不需要 */
  const handleToggleSymbolKeyboard = () => {

  };

  const renderIntegerKeyboard = () => (
    <IntegerKeyboard
      onToggleKeyboardEnglish={handleToggleKeyboardEnglish}
      onChangeKeyboardNumber={handleChangeKeyboardNumber}
      onDeleteString={handleDeleteString}
    />
  );

  const renderEnglishKeyboard = () => (
    <EnglishKeyboard
      english={english}
      onToggleNumberKeyboard={handleToggleNumberKeyboard}
      onToggleCase={handleToggleCase}
      onDeleteString={handleDeleteString}
      onChangeKeyboardNumber={handleChangeKeyboardNumber}
      onToggleSymbolKeyboard={handleToggleSymbolKeyboard}
    />
  );

  const renderKeyboardHeader = () => (
    <div className={Styles.root__header}>
      美廉美安全输入
      <button
        type="button"
        onClick={handleCompleteInputClick}
      >
        完成
      </button>
    </div>
  );

  const renderKeyboardContent = () => (
    <div className={Styles.root__content}>
      {renderKeyboardHeader()}
      {numberKeyboard ? renderIntegerKeyboard() : null}
      {!numberKeyboard ? renderEnglishKeyboard() : null}
    </div>
  );

  return (
    <div className={Styles.root}>
      {renderKeyboardContent()}
    </div>
  );
};

Keyboard.propTypes = {
  onChangeKeyboardNumber: PropTypes.func.isRequired,
  keyboardNumbers: PropTypes.string.isRequired,
  onCompleteInput: PropTypes.func.isRequired,
};
Keyboard.defaultProps = {};

export default Keyboard;
