import axios from 'axios';

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const apiClient = axios.create({
  baseURL: `${url}api_key=${apiKey}&q=`,
});

export const fetcher = (url: string) => apiClient.get(url).then((res) => res.data);
