import axiosInstance from './axiosConfig';

export const useAxios = async(url, params = {}, method = 'get') => {
  let data;

  if (method === 'post') {
    data = await axiosInstance.post(url, {...params});
  } else {
    data = await axiosInstance.get(url, {params: {...params}});
  }

  if (data) {
    return data.data;
  }

  return null;
};
