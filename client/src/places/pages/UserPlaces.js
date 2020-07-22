import React from 'react';

import PlaceList from '../components/PlaceList';

const PLACES = [
  {
    id: 'p1',
    title: 'Villa La Angostura',
    description: 'Considered the Garden of Patagonia.',
    imageUrl: 'https://bariloche.org/wp-content/uploads/2015/03/villa-la-angostura-726x400.jpg',
    address: 'Neuquén, Argentina',
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Cariló',
    description: 'It was a large desert close to the sea converted to a huge forest and a beach.',
    imageUrl: 'https://partidodepinamar.files.wordpress.com/2017/07/carilo-turismo-argentina.jpg',
    address: 'Pinamar, Argentina',
    creator: 'u2'
  }

]

const UserPlaces = () => {

  return (
    <PlaceList items={PLACES} />
  )
};

export default UserPlaces;