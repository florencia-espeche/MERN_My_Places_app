import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import './NewPlace.css';

const PLACES = [
  {
    id: 'p1',
    title: 'Villa La Angostura',
    description: 'Considered the Garden of Patagonia.',
    imageUrl: 'https://bariloche.org/wp-content/uploads/2015/03/villa-la-angostura-726x400.jpg',
    address: 'Neuquén, Argentina',
    location: {
      lat: 36.0993857,
      lng: -105.4902505
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Cariló',
    description: 'It was a large desert close to the sea, converted to a huge forest and a beach.',
    imageUrl: 'https://partidodepinamar.files.wordpress.com/2017/07/carilo-turismo-argentina.jpg',
    address: 'Pinamar, Argentina',
    location: {
      lat: -37.161503,
      lng: -56.899307
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'El Chaltén',
    description: 'The national capital of trekking.',
    imageUrl: 'https://www.aylenaikehostel.com.ar/wp-content/uploads/2015/06/el-chalten.jpg',
    address: 'Santa Cruz, Argentina',
    location: {
      lat: -49.32862,
      lng: -72.93001
    },
    creator: 'u1'
  },

];

const UpdatePlace = () => {

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false);

  const identifiedPlace = PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData({
        title: {
          value: identifiedPlace.title,
          isValid: true
        },
        description: {
          value: identifiedPlace.description,
          isValid: true
        }
      }, true)
    };
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (!formState.inputs.title.value) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />

      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characteres)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
  )
}

export default UpdatePlace;