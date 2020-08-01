import React, { useCallback } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './NewPlace.css';

const NewPlace = () => {

  const titleInputHandle = useCallback((id, value, isValid) => {

  }, []);

  const descriptionInputHandle = useCallback((id, value, isValid) => {

  }, []);

  return (
    <form className="place-form">
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={titleInputHandle} />

      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description (at least 5 characters).'
        onInput={descriptionInputHandle} />
    </form>
  )
};

export default NewPlace;