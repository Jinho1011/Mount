import React, {useState} from 'react';
import LoginDetailPresenter from './LoginDetailPresenter';

//유효검사
let emailValid = false;
let passwordValid = false;

//수정 여부 확인
let emailIsEdited = false;
let passwordIsEdited = false;

export default () => {
  const [email, setEmail] = useState(email);
  const [password, setPassword] = useState(password);

  const emailChangeHandler = email => {
    setEmail(email);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailRegex.test(email) ? (emailValid = true) : (emailValid = false);
    emailIsEdited = true;
    console.log(email, emailValid, emailIsEdited);
  };

  const passwordChangeHandler = password => {
    setPassword(password);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    passwordRegex.test(password)
      ? (passwordValid = true)
      : (passwordValid = false);
    passwordIsEdited = true;
  };

  return (
    <LoginDetailPresenter
      email={email}
      emailValid={emailValid}
      emailIsEdited={emailIsEdited}
      emailChangeHandler={emailChangeHandler}
      password={password}
      passwordValid={passwordValid}
      passwordIsEdited={passwordIsEdited}
      passwordChangeHandler={passwordChangeHandler}
    />
  );
};
