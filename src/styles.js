import { StyleSheet } from "react-native";
// 画面サイズにスケールを合わせてくれるらしいライブラリ
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c9d14a"
  },
  text: {
    position: "fixed",
    left: scale(10),
    top: scale(10),
    margin: "0",
    paddingTop: scale(0),
    paddingBottom: scale(3),
    paddingLeft: scale(10),
    paddingRight: scale(10),
    color: "#aeb43d",
    border: "4px solid",
    borderRadius: scale(4),
    boxShadow: "1px 1px 0 white",
    textShadow: "1px 1px 0 white",
    fontSize: moderateScale(30)
  }
});

export default styles;
