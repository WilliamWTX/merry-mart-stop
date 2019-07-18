/**
 * Created by william on 2019/7/18 11:08
 * Develop by william on 2019/7/18 11:08
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './CategoryType.scss';

const CategoryType = (props) => {
  const { categoryTypeList, selectedCategoryIndex } = props;

  const handleChangeCategoryType = (index) => {
    const { onChangeCategoryType } = props;
    onChangeCategoryType(index);
  };

  const renderCategoryTypeItem = (data, index) => {
    const key = `key_${index}`;
    return (
      <div
        role="none"
        onClick={() => (handleChangeCategoryType(index))}
        className={`${Styles.root} ${selectedCategoryIndex === index ? Styles.active : null}`}
        key={key}
      >
        {data.name}
      </div>
    );
  };

  const renderCategoryTypeList = () => {
    if (!categoryTypeList) {
      return null;
    }
    return categoryTypeList.map((item, index) => renderCategoryTypeItem(item, index));
  };

  const renderCategoryTypeContent = () => (
    <React.Fragment>
      {renderCategoryTypeList()}
    </React.Fragment>
  );

  return renderCategoryTypeContent();
};

CategoryType.propTypes = {
  categoryTypeList: PropTypes.arrayOf(PropTypes.shape()),
  onChangeCategoryType: PropTypes.func.isRequired,
};

CategoryType.defaultProps = {
  categoryTypeList: null,
};

export default CategoryType;
