/**
 * Created by william on 2019/7/17 14:29
 * Develop by william on 2019/7/17 14:29
 */
import React from 'react';
import CategoryLayout from './layout/CategoryLayout';
import CategoryData from '../../mock/category/Category';

class Category extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryTypeList: CategoryData.CategoryList(),
      selectedCategoryIndex: 0,
      categoryItemHeight: 0.45,
      scrollTop: 0,
      scrollHeight: 0,
      touchStartScrollY: 0,
      touchEndScrollY: 0,
    };
  }

  handleChangeCategoryType = (index) => {
    const { categoryItemHeight, scrollHeight } = this.state;
    if (scrollHeight > 0) {
      if (categoryItemHeight * index < scrollHeight) {
        this.setState({
          selectedCategoryIndex: index,
          scrollTop: index !== 0 ? categoryItemHeight * index : categoryItemHeight,
        });
      } else {
        this.setState({
          selectedCategoryIndex: index,
          scrollTop: scrollHeight,
        });
      }
    } else {
      this.setState({
        selectedCategoryIndex: index,
      });
    }
  };

  handleSetCanScrollHeight = (scrollHeight) => {
    this.setState({
      scrollHeight: scrollHeight > 0 ? scrollHeight / 100 : 0,
    });
  };

  handleTouchStart = (e) => {
    const { targetTouches } = e;
    const { pageY } = targetTouches[0];
    this.setState({
      touchStartScrollY: pageY,
    });
  };

  handleTouchMove = (e) => {
    const { targetTouches } = e;
    const { touchStartScrollY } = this.state;
    const { pageY } = targetTouches[0];
    const scrollDistance = (pageY - touchStartScrollY) / 100;
    if (scrollDistance < 0 && scrollDistance >= -1.5) {
      this.setState({
        scrollTop: 1.5,
      });
    } else if (scrollDistance > 0 && scrollDistance <= 1.5) {
      this.setState({
        scrollTop: -1.5,
      });
    }
  };

  handleTouchEnd = () => {
    const {
      touchStartScrollY, touchEndScrollY,
    } = this.state;
    parseInt(Math.abs(touchEndScrollY - touchStartScrollY) / 100, 10);
    this.setState({
      scrollTop: 0,
    });
  };

  renderCategoryLayout = () => {
    const { categoryTypeList, selectedCategoryIndex, scrollTop } = this.state;
    return (
      <CategoryLayout
        onChangeCategoryType={this.handleChangeCategoryType}
        onSetCanScrollHeight={this.handleSetCanScrollHeight}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        {...{ scrollTop, categoryTypeList, selectedCategoryIndex }}
      />
    );
  };

  render() {
    return this.renderCategoryLayout();
  }
}

export default Category;
