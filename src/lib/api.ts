import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_PUBLIC_API}`
});
api.defaults.headers.common['Content-Type'] = 'application/json';
