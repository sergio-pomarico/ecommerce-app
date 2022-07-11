import React, {FC, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
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
  const [opacity, setOpacity] = useState(0);
  const navigation = useNavigation();
  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(product);
        setOpacity(0);
      }}>
      <Box
        borderRadius="l"
        backgroundColor="white"
        padding="s"
        flexDirection="row"
        marginHorizontal="s"
        marginBottom="s"
        height={120}
        flex={1}
        opacity={opacity}
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
