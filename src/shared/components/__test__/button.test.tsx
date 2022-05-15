import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from '@components';
import {ThemeProvider} from '@config/theme';

describe('Button test suite', () => {
  const onPressMock = jest.fn();
  const label = 'Next';
  const testID = 'btn-component';
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('check if the button render correctly', () => {
    const {getByText} = render(
      <ThemeProvider>
        <Button onPress={onPressMock} label={label} variant="primary" />,
      </ThemeProvider>,
    );
    const button = getByText(label);
    expect(button).not.toBeNull();
  });
  test('check if the button is pressed correctly', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <Button
          onPress={onPressMock}
          label={label}
          variant="primary"
          testID={testID}
        />
      </ThemeProvider>,
    );
    const button = getByTestId(testID);
    fireEvent.press(button);
    expect(onPressMock).toBeCalled();
  });
  test('check if the button is disabled correctly', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <Button
          onPress={onPressMock}
          label={label}
          variant="primary"
          disabled
          testID={testID}
        />
      </ThemeProvider>,
    );
    const button = getByTestId(testID);
    fireEvent.press(button);
    expect(onPressMock).not.toBeCalled();
  });
});
