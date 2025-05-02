import { fireEvent, render, screen } from '@testing-library/react';
import { validateEmail,validatePassword } from '../services/loginValidation';

test("Email Validation Test",() => {
  let r= validateEmail("sowmya@gmail.com");
  let expectedresult = true;
  expect(r).toEqual(expectedresult);
});


test("Password Validation Test",() => {
  let res = validatePassword("Abc@12345");
  let expectedresult = true;
  expect(res).toEqual(expectedresult);
});

