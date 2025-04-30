import { validateEmail,validatePassword } from "../services/loginvalidation";

test("Email Validation Test",() => {
    let r= validateEmail("khan@gmail.com");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  test("Email Validation Test",() => {
    let r= validateEmail("1234@gmail.com");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  test("Email Validation Test",() => {
    let r= validateEmail("k390?@gmail.com");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  test("Email Validation Test",() => {
    let r= validateEmail("k-e345>@gmail.com");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  test("Invalid Email Validation Test",() => {
    let r= validateEmail("khan@gmail");
    let expectedresult = false;
    expect(r).toEqual(expectedresult);
  });

  test("Password Validation Test",() => {
    let r= validatePassword("12345678");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  test("Invalid Password Validation Test",() => {
    let r= validatePassword("12345");
    let expectedresult = false;
    expect(r).toEqual(expectedresult);
  });

  test("Password Validation Test",() => {
    let r= validatePassword("Dastageer");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  test("Invalid Password Validation Test",() => {
    let r= validatePassword("Sunay");
    let expectedresult = false;
    expect(r).toEqual(expectedresult);
  });

  test("Password Validation Test",() => {
    let r= validatePassword("D1234>?56");
    let expectedresult = true;
    expect(r).toEqual(expectedresult);
  });

  

  
