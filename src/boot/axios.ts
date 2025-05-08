// src/boot/axios.ts
import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050/api',
});

export default boot(({ app }) => {
  app.config.globalProperties.$api = api;
});

export { api };
