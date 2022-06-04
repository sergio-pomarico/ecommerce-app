import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Text} from '@components';

const Product: FC = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        borderRadius="l"
        backgroundColor="white"
        padding="s"
        flexDirection="row"
        marginBottom="s"
        alignItems="center">
        <Box flex={0.3}>
          <Image
            source={require('../../assets/apple_watch.jpg')}
            style={styles.image}
          />
        </Box>
        <Box flex={0.7} justifyContent="center" alignItems="flex-start">
          <Text
            fontWeight="600"
            fontFamily="Raleway-Regular"
            fontSize={16}
            lineHeight={18}
            marginBottom="xs">
            Apple Watch - Serie 6
          </Text>
          <Text
            fontWeight="600"
            fontFamily="Raleway-Regular"
            fontSize={15}
            lineHeight={18}
            color="primary"
            marginBottom="xs">
            $ 359 USD
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
  },
});

export default Product;
