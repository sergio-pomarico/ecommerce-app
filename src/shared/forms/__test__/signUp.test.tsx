import React from 'react';
import {ThemeProvider} from '@config/theme';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import SignUpForm from '@forms/signup';

describe('SignUp test suite', () => {
  const onSubmitMock = jest.fn();
  const onPressLoginMock = jest.fn();
  const emailMock = 'email@email.com';
  const passwordMock = '123445';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('check if the SignUp Form render correctly', () => {
    const {toJSON} = render(
      <ThemeProvider>
        <SignUpForm onSubmit={onSubmitMock} onPressLogin={onPressLoginMock} />
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('check if SignUp Form is submitting correctly', async () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <SignUpForm onSubmit={onSubmitMock} onPressLogin={onPressLoginMock} />
      </ThemeProvider>,
    );
    const email = getByTestId('input_email');
    const password = getByTestId('input_password');
    const confirm_password = getByTestId('input_comfirm_password');
    const buton = getByTestId('btn_sign_up');
    await waitFor(() => {
      fireEvent.changeText(email, emailMock);
      fireEvent.changeText(password, passwordMock);
      fireEvent.changeText(confirm_password, passwordMock);
      fireEvent.press(buton);
      expect(onSubmitMock).toHaveBeenCalledWith({
        email: emailMock,
        password: passwordMock,
        passwordConfirmation: passwordMock,
      });
    });
  });

  test('check if Login Form submit button is disabled', () => {
    const {getByTestId} = render(
      <ThemeProvider>
        <SignUpForm onSubmit={onSubmitMock} onPressLogin={onPressLoginMock} />
      </ThemeProvider>,
    );
    const buton = getByTestId('btn_sign_up');
    fireEvent.press(buton);
    expect(onSubmitMock).not.toBeCalled();
  });
});
