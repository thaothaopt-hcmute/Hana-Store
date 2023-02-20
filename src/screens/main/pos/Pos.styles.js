import { DEFAULT_PADDING_HORIZONTAL } from "constants/size";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: DEFAULT_PADDING_HORIZONTAL
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent:'center'
  }
});
