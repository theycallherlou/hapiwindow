import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.BASE_URL
});

export async function getAllUsers() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
