import React, {useLayoutEffect, useCallback} from 'react';
import {ToastAndroid} from 'react-native';
import CategoryView from './Category.view';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {NAMESPACE} from './Category.constants';
import {getString} from 'utils/i18n';
import {useActions} from 'hooks/useActions';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
import { getCategoriesSelector } from 'store/selectors/idiomsSelector';
// import {showNotification} from 'components/Modal/ModalNotification';
import {getIdioms, selectCategory} from 'store/actions/idiomsActions';


export default function CategoryContainer({navigation}) {
  const actions = useActions({selectCategory, getIdioms});
  const categories = useSelectorShallow(getCategoriesSelector);
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: getString(`${NAMESPACE}.title`),
  //   });
  // }, [navigation]);

  const onPressCategoryItem = useCallback(
    (item) => {
      actions.selectCategory(item);
    },
    [actions],
  );

  const showToastWithGravityAndOffset = useCallback(() => {
    ToastAndroid.showWithGravityAndOffset(
      "Hãy chọn một chủ đề bạn quan tâm !",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  },[]);

  const onPressContinue = useCallback(() => {
    actions.getIdioms();
    const isSelectedCategory = categories.some((e) => e.isSelected === true);
    if (isSelectedCategory) {
      NavigationServices.resetActionTo(SCREENS_NAME.HOME);
    } else {
      console.log('Hãy chọn một chủ đề bạn quan tâm !');
      showToastWithGravityAndOffset()
    }
  }, [actions, categories]);
  

  return (
    <CategoryView
      categories={categories}
      onPressCategoryItem={onPressCategoryItem}
      onPressContinue={onPressContinue}
    />
  );
}
