import axios from 'axios';

export async function getUsers(signal: AbortSignal) {
  try {
    const response = await axios.get('/api/v1/users', { signal });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        'An error occurred while making the request to get users:',
        error.message
      );
      throw new Error(
        `An error occurred while making the request to get users: ${error.message}`
      );
    }
  }
}
