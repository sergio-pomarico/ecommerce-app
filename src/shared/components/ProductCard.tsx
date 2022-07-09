import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {Box, Text} from '@atoms';
import {Product} from '@core/models/product';

interface ProductCardProps {
  onPress: (product: Product) => void;
  product: Product;
}

const ProductCard: FC<ProductCardProps> = props => {
  const {product, onPress} = props;
  const {id, image, name, price} = product;
  return (
    <TouchableOpacity onPress={() => onPress(product)}>
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
          <SharedElement id={id}>
            <Image source={image} style={styles.image} />
          </SharedElement>
        </Box>
        <Box flex={0.7} justifyContent="flex-start" alignItems="flex-start">
          <Text variant="product_card_title" marginBottom="s">
            {name}
          </Text>
          <Text variant="price" color="primary" marginBottom="s">
            $ {price} USD
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
