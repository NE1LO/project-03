import { apiInstance } from './services/api';

const getFilters = async object => {
  try {
    const response = await apiInstance.get('filters', { params: object });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const allApi = { getFilters };
