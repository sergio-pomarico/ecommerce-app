import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Text} from '@components';

const ProductCard: FC = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Box
        borderRadius="l"
        backgroundColor="white"
        padding="s"
        flexDirection="row"
        marginHorizontal="s"
        marginBottom="s"
        height={120}
        flex={1}
        alignItems="center">
        <Box flex={0.3}>
          <Image
            source={require('../../assets/apple_watch.jpg')}
            style={styles.image}
          />
        </Box>
        <Box flex={0.7} justifyContent="flex-start" alignItems="flex-start">
          <Text variant="product_card_title" marginBottom="s">
            Apple Watch - Serie 6
          </Text>
          <Text variant="price" color="primary" marginBottom="s">
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
    height: 88,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default ProductCard;
