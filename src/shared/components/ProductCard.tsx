import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import Box from './Box';
import Text from './Text';

interface ProductCardProps {
  onPress: () => void;
}

const ProductCard: FC<ProductCardProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
          <SharedElement id="apple_watch">
            <Image
              source={require('../../assets/apple_watch.jpg')}
              style={styles.image}
            />
          </SharedElement>
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
    height: 80,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default ProductCard;
