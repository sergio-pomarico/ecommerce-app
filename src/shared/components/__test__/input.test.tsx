import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ThemeProvider} from '@config/theme';
import {Input} from '@components';

describe('Input test suite', () => {
  const testID = 'input';
  const props = {
    onChanceText: jest.fn(),
    onBlur: jest.fn(),
    touched: false,
    error: '',
    label: 'Email',
    placeholder: 'Add your email',
    testID,
  };
  test('check if the Input render correctly', () => {
    const {toJSON} = render(
      <ThemeProvider>
        <Input {...props} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('forwards all props to the Input', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <Input {...props} />
      </ThemeProvider>,
    );

    const input = getByTestId(testID);

    fireEvent.changeText(input, 'testing!');

    expect(props.onChanceText).toHaveBeenCalled();
    expect(props.onChanceText).toHaveBeenCalledWith('testing!');
  });
});
