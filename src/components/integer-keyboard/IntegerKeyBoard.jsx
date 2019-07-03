/**
 * Created by william on 2019/7/3 15:14
 * Develop by william on 2019/7/3 15:14
 */
import React, { useState } from 'react';
import KeyboardUtil from '../../util/KeyboardUtil';

const IntegerKeyBoard = () => {
  const [keyboardNumbers, setKeyboardNumbers] = useState(KeyboardUtil.IntegerKeyBoardNumber());
  console.log(keyboardNumbers, setKeyboardNumbers);

  const renderKeyboardNumbers = () => keyboardNumbers.map((item, index) => {
    const key = `key_${index}`;
    return (
      <div key={key}>{item}</div>
    );
  });

  return (
    <div>
      {renderKeyboardNumbers()}
    </div>
  );
};

export default IntegerKeyBoard;
