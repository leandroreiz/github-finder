import { config } from '../../config/config';
import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState([true]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(`${config.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${config.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setisLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
