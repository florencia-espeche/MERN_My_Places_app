import React, { useState, useContext} from 'react';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import './Auth.css';
import Button from '../../shared/components/FormElements/Button';
import {AuthContext} from '../../shared/context/auth-context';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoguinMode, setIsLogiMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  })

  const switchModeHandler = () => {
    if(!isLoguinMode){
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false);
    }
    setIsLogiMode(prevMode => !prevMode);
  }

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    auth.login();
  }

  return (
    <Card className="auth">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoguinMode && <Input element="input" id="name" type="text" label="Name"
          validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a name." onInput={inputHandler}></Input>}
        <Input element="input" id="email" type="email" label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler} />
        <Input element="input" id="password" type="password" label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler} />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoguinMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoguinMode ? 'SIGNUP' : 'LOGIN'}</Button>
    </Card>
  );
}

export default Auth;