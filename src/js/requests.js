import { apiInstance } from './services/api';

const getFilters = async object => {
  try {
    const response = await apiInstance.get('filters', { params: object });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getWorkout = async object => {
  try {
    return await apiInstance.get('exercises', { params: object });
  } catch (error) {
    console.log(error);
  }
};

const getQuote = async () => {
  try {
    const response = await apiInstance.get('quote');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const allApi = { getFilters, getWorkout, getQuote };
