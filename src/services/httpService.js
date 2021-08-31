import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'https://api-react-elecion.glitch.me', timeout: 10000})

export async function get(url){
  const { data } = await axiosInstance.get(url);
  return data;
}