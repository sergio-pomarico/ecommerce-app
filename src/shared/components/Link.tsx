import React from 'react';

import {Text} from '@components';
import {TouchableOpacity} from 'react-native';
import {Theme} from '@config/theme';

interface LinkProps {
  label: string;
  color?: keyof Theme['colors'];
  alignment?: 'center' | 'left' | 'right';
  onPress: () => void;
}

const Link = ({label, color, onPress, alignment = 'left'}: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text color={color || 'primary'} textAlign={alignment} fontSize={16}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
