import { StyleSheet, Dimensions, Platform } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 2,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  sliderImage: {
    flex: 1,
    width: WINDOW_WIDTH - 50,
    height: "100%",
    resizeMode: "cover",
  },
  indicatorContainer: {
    width: "100%",
    position: "absolute",
    bottom: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 16,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  indicatorItem: {
    height: "100%",
    borderRadius: 4,
    opacity: 0.9,
  },
  componentContainer: {
    width: "100%",
    height: WINDOW_HEIGHT / 2.5,
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        elevation: 3,
      },
    }),
    overflow: "hidden",

  },
  sliderContainer: {
    width: "100%",
    height: "75%",
    borderRadius: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    width: "100%",
    height: "25%",
  },
  detailsContainerTop: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  detailsContainerBottom: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  nameText: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    color: "#2C3E50",
  },
  addressText: {
    color: "#B8B8B8",
    fontSize: 14,
    marginLeft: 5,
  },
  starContainer: {
    position: "absolute",
    right: 50,
    top: -15,
    height: 60,
    width: 40,
    backgroundColor: "#ffffff",
    zIndex: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 10,
  },

});
