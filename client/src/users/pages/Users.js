import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Florencia',
      image: 'https://images.pexels.com/photos/2400843/pexels-photo-2400843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      places: 3
    }
  ];
  return <UserList items={USERS}/>;

}

export default Users;