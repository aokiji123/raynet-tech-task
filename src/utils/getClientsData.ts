import axios from 'axios';

const token = btoa(`${import.meta.env.VITE_RAYNET_CRM_USER_NAME}:${import.meta.env.VITE_RAYNET_CRM_API_KEY}`);
const instanceName = import.meta.env.VITE_RAYNET_CRM_INSTANCE_NAME;

const api = axios.create({
  baseURL: 'https://app.raynet.cz/api/v2/company/',
  headers: {
    'Authorization': `Basic ${token}`,
    'X-Instance-Name': instanceName,
  },
});

export const getClientsData = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};
