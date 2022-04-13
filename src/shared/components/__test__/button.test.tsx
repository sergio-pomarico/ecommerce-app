import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from '@components';

describe('Button test suite', () => {
  const onPressMock = jest.fn();
  const label = 'Next';
  const testID = 'btn-component';

  test('check if the button render correctly', () => {
    const {getByText} = render(
      <Button onPress={onPressMock} label={label} variant="primary" />,
    );
    const button = getByText(label);
    expect(button).not.toBeNull();
  });
  test('check if the button is pressed correctly', () => {
    const {getByTestId} = render(
      <Button
        onPress={onPressMock}
        label={label}
        variant="primary"
        testID={testID}
      />,
    );
    const button = getByTestId(testID);
    fireEvent.press(button);
    expect(onPressMock).toBeCalled();
  });
  test('check if the button is disabled correctly', () => {
    jest.clearAllMocks();
    const {getByTestId} = render(
      <Button
        onPress={onPressMock}
        label={label}
        variant="primary"
        disabled
        testID={testID}
      />,
    );
    const button = getByTestId(testID);
    fireEvent.press(button);
    expect(onPressMock).not.toBeCalled();
  });
});
