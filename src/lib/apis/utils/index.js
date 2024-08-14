import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://youngcamp.co.kr/', // 임의
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});