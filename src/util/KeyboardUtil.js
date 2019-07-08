/**
 * Created by 12718 on 2019/7/3 15:18
 * Develop by 12718 on 2019/7/3 15:18
 */
class KeyboardUtil {
  static IntegerKeyBoardNumber() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  }

  static keyboardNumber() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 'ABC', 0, 'del'];
  }

  static keyboardLowercaseEnglishList() {
    return [
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
    ];
  }

  static keyboardCapitalEnglishList() {
    return [
      'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    ];
  }

  static englishArrSplit(list, start, end) {
    const firstList = [];
    const middleList = [];
    const lastList = [];
    if (!list || !list.length) {
      return {
        firstList,
        middleList,
        lastList,
      };
    }
    list.forEach((item, index) => {
      if (index <= start) {
        firstList.push(item);
      }

      if (index > start && index <= end) {
        middleList.push(item);
      }

      if (index > end) {
        lastList.push(item);
      }
    });
    return {
      firstList,
      middleList,
      lastList,
    };
  }
}

export default KeyboardUtil;
