import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './HomeTabBarStyles';
import Colors from '../../assets/colors';

const HomeTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.shadowContainer}>
    <View style={styles.container}>

      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName;
        switch (route.name) {
          case "MyPage":
            iconName = "user";
            break;
          case "Book":
            iconName = "calendar-alt";
            break;
          default:
            iconName = "home";
        }

        let iconColor = isFocused ? Colors.CYAN: Colors.TAB_ICON_PASSIVE_COLOR;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}
            key={index.toString()}
          >
            <View style={styles.tabContainer}>
              <Icon name={iconName} size={20} color={iconColor}/>
            </View>
          </TouchableOpacity>
        );
      })}

    </View>
    </View>
  );
}

export default HomeTabBar;
