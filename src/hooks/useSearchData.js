import React from 'react';

/**
 * This hook help us easy to search data local
 * @param {Array<any>} listData
 * @param {string} searchText
 * @param {(listData: Array<any>, searchText: string) => Array<any>} conditionFunc
 * @returns Trả về mảng dữ liệu đã search được
 */
export function useSearchData(listData, searchText, conditionFunc) {
  const [dataSearch, setData] = React.useState(listData);

  React.useEffect(() => {
    setData(conditionFunc(listData, searchText));
  }, [searchText, listData]);
  return dataSearch;
}
