import React from 'react';
import {ThemeProvider} from '@config/theme';
import {
  render,
  fireEvent,
  waitFor,
  RenderAPI,
} from '@testing-library/react-native';

import LoginForm from '@forms/login';

describe('LoginForm test suite', () => {
  const onSubmitMock = jest.fn();
  const onPressForgotMock = jest.fn();
  const onPressSignUpMock = jest.fn();
  const emailMock = 'email@email.com';
  const passwordMock = '123445';
  let loginComponent: RenderAPI;

  beforeEach(() => {
    loginComponent = render(
      <ThemeProvider>
        <LoginForm
          onSubmit={onSubmitMock}
          onPressForgot={onPressForgotMock}
          onPressSignUp={onPressSignUpMock}
        />
      </ThemeProvider>,
    );
    jest.clearAllMocks();
  });

  test('check if the Login Form render correctly', () => {
    const {toJSON} = loginComponent;
    expect(toJSON()).toMatchSnapshot();
  });

  test('check if Login Form is submitting correctly', async () => {
    const {getByTestId} = loginComponent;
    const email = getByTestId('input_email');
    const password = getByTestId('input_password');
    const buton = getByTestId('btn_login');

    fireEvent.changeText(email, emailMock);
    fireEvent.changeText(password, passwordMock);
    fireEvent.press(buton);

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        email: emailMock,
        password: passwordMock,
      });
    });
  });

  test('check if Login Form submit button is disabled', () => {
    const {getByTestId} = loginComponent;
    const buton = getByTestId('btn_login');
    fireEvent.press(buton);
    expect(onSubmitMock).not.toBeCalled();
  });
});
