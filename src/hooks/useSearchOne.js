import React from 'react';

/**
 * This hook help us easy to search data local
 * @param {Array<any>} listData
 * @param {string} searchText
 * @param {(listData: Array<any>, searchText: string) => Array<any>} conditionFunc
 * @param {number} delay
 * @returns Trả về dữ liệu đã search được
 */
export function useSearchOne(listData, searchText, conditionFunc, delay = 200) {
  const [dataSearch, setData] = React.useState(listData);

  React.useEffect(() => {
    timeout = setTimeout(() => {
      setData(conditionFunc(listData, searchText));
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchText, listData]);

  return [dataSearch, setData];
}
