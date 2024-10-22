import axios from 'axios';
import { User } from '../types';

export async function getAllUsers(): Promise<User[]> {
  try {
    const response = await axios.get('/api/v1/users');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
