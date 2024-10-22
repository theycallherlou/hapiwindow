import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { getUsers } from '../services/users';
import { UseUsersResult, User } from '../types';

export default function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async (signal: AbortSignal) => {
    try {
      const data = await getUsers(signal);
      setUsers(data);
      setError(null);
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchUsers(controller.signal);

    return () => controller.abort();
  }, [fetchUsers]);

  return { users, loading, error };
}
