import React from 'react';
import PropTypes from 'prop-types';
import KeyboardUtil from '../../util/KeyboardUtil';

const EnglishKeyboard = (props) => {
  const { english } = props;
  const data = KeyboardUtil.englishArrSplit(english, 9, 18);
  console.log(data);
  const renderEnglishNumbers = () => {

  };
  return (
    <div>
      {renderEnglishNumbers()}
    </div>
  );
};

EnglishKeyboard.propTypes = {
  english: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EnglishKeyboard;
