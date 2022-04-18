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
  test('check if the Input change text correctly', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <Input {...props} />
      </ThemeProvider>,
    );

    const input = getByTestId(testID);
    fireEvent.changeText(input, 'testing!');
    expect(props.onChanceText).toHaveBeenCalledWith('testing!');
  });

  test('check if the Input show error correctly', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <Input {...props} error="is required" touched />
      </ThemeProvider>,
    );
    const error = getByTestId(`${testID}_error`);
    expect(error).not.toBeNull();
  });
});
