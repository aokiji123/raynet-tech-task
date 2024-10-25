import axios from 'axios';

const token = btoa(`${import.meta.env.VITE_RAYNET_CRM_USER_NAME}:${import.meta.env.VITE_RAYNET_CRM_API_KEY}`);

export const getAllClientsData = async () => {
  try {
    const response = await axios.get('https://app.raynet.cz/api/v2/company/', {
      headers: {
        'Authorization': `Basic ${token}`,
        'X-Instance-Name': import.meta.env.VITE_RAYNET_CRM_INSTANCE_NAME
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};
