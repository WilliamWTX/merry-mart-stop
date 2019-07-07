import React from 'react';
// import IntegerKeyboard from './IntegerKeyboard';
import Styles from './Keyboard.scss';
import KeyboardUtil from '../../util/KeyboardUtil';
import EnglishKeyboard from './EnglishKeyboard';

const Keyboard = () => {
  // const renderIntegerKeyboard = () => (
  //   <IntegerKeyboard />
  // );

  const renderEnglishKeyboard = () => (
    <EnglishKeyboard
      english={KeyboardUtil.keyboardLowercaseEnglishList()}
      capitalEnglish={KeyboardUtil.keyboardCapitalEnglishList()}
    />
  );

  const renderKeyboardContent = () => (
    <div className={Styles.root__content}>
      {/* {renderIntegerKeyboard()} */}
      {renderEnglishKeyboard()}
    </div>
  );


  return (
    <div className={Styles.root}>
      {renderKeyboardContent()}
    </div>
  );
};
export default Keyboard;
