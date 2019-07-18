/**
 * Created by william on 2019/7/17 14:31
 * Develop by william on 2019/7/17 14:31
 */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryType from '../type/CategoryType';
import Search from '../search/Search';
import Styles from './CategoryLayout.scss';

const CategoryLayout = (props) => {
  const { categoryTypeList, selectedCategoryIndex, scrollTop } = props;

  const handleChangeCategoryType = (index) => {
    const { onChangeCategoryType } = props;
    onChangeCategoryType(index);
  };

  const bindScrollCategoryTypeRef = (ref) => {
    if (ref) {
      const { onSetCanScrollHeight } = props;
      onSetCanScrollHeight(ref.scrollHeight - document.body.clientHeight);
    }
  };

  const renderSearch = () => (
    <Search />
  );

  const renderCategoryTypeList = () => (
    <CategoryType
      categoryTypeList={categoryTypeList}
      scrollTop={scrollTop}
      onChangeCategoryType={handleChangeCategoryType}
      selectedCategoryIndex={selectedCategoryIndex}
    />
  );

  const renderCategoryContent = () => (
    <React.Fragment>
      <div className={Styles.root}>
        <div>
          {renderSearch()}
        </div>
        <div
          className={Styles.root__type}
        >
          <div
            ref={bindScrollCategoryTypeRef}
            style={{
              transform: `translateY(${-scrollTop}rem)`,
              transition: 'transform 200ms linear',
            }}
          >
            {renderCategoryTypeList()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return renderCategoryContent();
};

CategoryLayout.propTypes = {
  categoryTypeList: PropTypes.arrayOf(PropTypes.shape()),
  onChangeCategoryType: PropTypes.func.isRequired,
  selectedCategoryIndex: PropTypes.number.isRequired,
  scrollTop: PropTypes.number.isRequired,
  onSetCanScrollHeight: PropTypes.func.isRequired,
};
CategoryLayout.defaultProps = {
  categoryTypeList: null,
};

export default CategoryLayout;
