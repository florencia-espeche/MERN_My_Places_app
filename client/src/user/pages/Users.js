import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Florencia',
      image:
        'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      places: 3
    },
    {
      id: 'u2',
      name: 'Regina',
      image:
        'https://images.pexels.com/photos/1377455/pexels-photo-1377455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      places: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
