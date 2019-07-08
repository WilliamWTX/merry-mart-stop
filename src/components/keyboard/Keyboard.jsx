import React, { useState } from 'react';
import IntegerKeyboard from './IntegerKeyboard';
import Styles from './Keyboard.scss';
import KeyboardUtil from '../../util/KeyboardUtil';
import EnglishKeyboard from './EnglishKeyboard';

const Keyboard = () => {
  const [numberKeyboard, setNumberKeyboard] = useState(true);
  const [english, setEnglish] = useState(KeyboardUtil.keyboardLowercaseEnglishList());
  const [isLowercaseEnglish, setIsLowercaseEnglish] = useState(true);
  const [keyboardNumber, setKeyboardNumber] = useState('');

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
      const newKeyboardNumber = keyboardNumber.slice(0, keyboardNumber.length - 1);
      setKeyboardNumber(newKeyboardNumber);
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
    setKeyboardNumber(newKeyboardNumber);
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

  const renderKeyboardContent = () => (
    <div className={Styles.root__content}>
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

export default Keyboard;
