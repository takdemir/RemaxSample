import {StyleSheet, Platform} from "react-native";
import Colors from '../../assets/colors';

export default StyleSheet.create({
  shadowContainer: {
    height: 57,
    backgroundColor: Colors.VERY_LIGHT_GRAY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  container: {
    width: "100%",
    height: 56,
    bottom: 0,
    position: 'absolute',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 75,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowColor: Colors.BLACK,
        shadowOffset: {
          width: 1,
          height: 1
        }
      },
      android: {
        elevation: 5,
      }
    })
  },
  tabContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
