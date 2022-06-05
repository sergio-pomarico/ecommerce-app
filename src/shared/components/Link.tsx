import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Theme} from '@config/theme';

import Text from './Text';

interface LinkProps {
  label: string;
  color?: keyof Theme['colors'];
  alignment?: 'center' | 'left' | 'right';
  onPress: () => void;
  testID?: string;
}

const Link = ({
  label,
  color,
  onPress,
  alignment = 'left',
  testID,
}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <Text color={color || 'primary'} textAlign={alignment} fontSize={16}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
