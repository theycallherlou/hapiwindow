import { Link } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import { User } from '../types';

export default function EmployeeList() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
