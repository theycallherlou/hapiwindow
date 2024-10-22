import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { getAllUsers } from '../services/users';
import { UseUsersResult, User } from '../types';

export default function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data: User[] = await getAllUsers();
      setUsers(data);
      setError(null);
      setLoading(false);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<{ message: string }>;
        if (axiosError.response) {
          setError(
            `Error ${axiosError.response.status}: ${axiosError.response.data.message}`
          );
        } else if (axiosError.request) {
          setError('No response received from the server');
        } else {
          setError(`Request setup error: ${axiosError.message}`);
        }
      } else {
        setError('An unexpected error occurred');
      }
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error };
}
