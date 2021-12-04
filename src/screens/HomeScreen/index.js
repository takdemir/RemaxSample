import React from "react";
import {View, FlatList, Dimensions, Text} from "react-native";
import styles from '../../assets/css/home_screen_styles';
import Images from '../../assets/images/images';
import Slider from "../../components/combined/slider";
const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get("window");

const HomeScreen = () => {

  const demoHomeSliders_1 = [
    {
      id: "home_slider_1",
      image: Images.HOME_1
    },
    {
      id: "home_slider_2",
      image: Images.HOME_2
    },
    {
      id: "home_slider_3",
      image: Images.HOME_3
    }
  ];

  const demoHomeSliders_2 = [
    {
      id: "home_slider_4",
      image: Images.HOME_1
    },
    {
      id: "home_slider_5",
      image: Images.HOME_2
    },
    {
      id: "home_slider_6",
      image: Images.HOME_3
    }
  ];

  const demoData = [
    {
      id: "flat_list_home_1",
      images: demoHomeSliders_1,
      name: "Maslak 42 Tower",
      address: "Maslak Mahallesi, Levent, İstanbul"
    },
    {
      id: "flat_list_home_2",
      images: demoHomeSliders_2,
      name: "Maslak 43 Tower",
      address: "Maslak 43 Mahallesi, Levent, İstanbul"
    }
  ];


  const renderItem = ({item}) => {
    return (
        <Slider items={item} key={item.id} />
    )
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={demoData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HomeScreen;
