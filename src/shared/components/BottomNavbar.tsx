import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box} from '@components';
import {Icon} from '@config/icons';
import {useTheme} from '@config/theme';

const icons = {
  Home: 'home',
  Cart: 'buy',
  Favorites: 'heart',
  Profile: 'profile',
};

type iconsKey = keyof typeof icons;

const BottomNavbar: FC<BottomTabBarProps> = ({state, navigation}) => {
  const {routeNames, index} = state;
  const {navigate} = navigation;
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      style={{paddingBottom: insets.bottom}}
      paddingHorizontal="l"
      paddingTop="s"
      backgroundColor="background">
      {routeNames.map((route, i) => {
        const isFocused = index === i;
        return (
          <TouchableOpacity
            onPress={!isFocused ? () => navigate(route) : undefined}
            key={`${route.toLowerCase()}__${i}`}>
            <Box
              width={theme.spacing.l}
              height={theme.spacing.l}
              borderRadius="m"
              alignContent="center"
              justifyContent="center">
              <Icon
                name={icons[route as iconsKey]}
                size={theme.spacing.m}
                color={isFocused ? theme.colors.primary : theme.colors.text}
                style={style.icon}
              />
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

const style = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
});

export default BottomNavbar;
