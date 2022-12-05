import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {mapPropsToFontStyle} from 'utils/styleHelper';

const AppText = props => {
  const {style} = props;
  const styles = useMemo(
    () => [mapPropsToFontStyle(props), style],
    [props, style],
  );
  return (
    <Text  style={styles} {...props}>
      {props.children || ''}
    </Text>
  );
};

AppText.defaultProps = {};

export default React.memo(AppText);
