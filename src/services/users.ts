import axios from 'axios';
import { User } from '../types';

export async function getAllUsers(signal: AbortSignal): Promise<User[]> {
  try {
    const response = await axios.get('/api/v1/users', { signal });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
