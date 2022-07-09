import React, {FC, useCallback} from 'react';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import {createBox} from '@shopify/restyle';

import {Theme} from '@config/theme';
import {Product} from '@core/models/product';
import ProductCard from './ProductCard';

const StyledFlatList = createBox<Theme, FlatListProps<Product>>(FlatList);

interface ProductListProps {
  data: Array<Product>;
  onPressProduct: (product: Product) => void;
}

const ProductList: FC<ProductListProps> = ({data, onPressProduct}) => {
  const renderItem = useCallback<ListRenderItem<Product>>(
    ({item}) => (
      <ProductCard product={item} onPress={() => onPressProduct(item)} />
    ),
    [onPressProduct],
  );
  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      renderItem={renderItem}
      keyExtractor={item => item.id}
      nestedScrollEnabled
      data={data}
    />
  );
};

export default ProductList;
