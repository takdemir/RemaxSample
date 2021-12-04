import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "../../../assets/css/slider_styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const Slider = (props) => {

  const [selectedIndicator, setSelectedIndicator] = useState(0);

  const _handleScroll = ({ nativeEvent }) => {
    const { width: oneSliderItemWidth } = nativeEvent.layoutMeasurement;
    const { x: sliderWidth } = nativeEvent.contentOffset;
    const index = Math.floor(sliderWidth / oneSliderItemWidth);
    setSelectedIndicator(index);
  };

  const { items: { images, name, address } } = props;

  return (
    <View style={styles.container}>

      <View style={styles.componentContainer}>

        <View style={styles.starContainer}>
          <Icon name={"star"} size={20} style={{ color: "#324455" }} />
        </View>

        <View style={styles.sliderContainer}>
          <ScrollView horizontal={true}
                      onMomentumScrollEnd={_handleScroll}
                      showsHorizontalScrollIndicator={false}
                      scrollEventThrottle={16}
                      pagingEnabled={true}
                      decelerationRate="fast"
          >
            {
              images.map((item) => {
                return (
                  <Image source={item.image} style={styles.sliderImage} key={item.id} />
                );
              })
            }
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {
              images.map((item, index) => {
                let width = (Math.floor((100 / images.length)) - 1) + "%";
                let backgroundColor = "#ffffff";
                if (selectedIndicator === index) {
                  backgroundColor = "#4695D2";
                }
                return (
                  <View style={{ ...styles.indicatorItem, ...{ width, backgroundColor } }}
                        key={item.id + Math.random()} />
                );
              })
            }
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsContainerTop}>
            <Text style={styles.nameText}>{name}</Text>
            <Icon name={"arrow-right"} size={20} style={styles.icon} />
          </View>
          <View style={styles.detailsContainerBottom}>
            <Icon name={"map-marker-alt"} size={20} style={styles.icon} />
            <Text style={styles.addressText}>{address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Slider;
