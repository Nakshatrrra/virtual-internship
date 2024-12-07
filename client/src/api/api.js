import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  

export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/login`, userData);
export const getAllUsers = () => axios.get(`${API_URL}/users`);
export const getBestMatch = (skills, interests) => axios.post(`${API_URL}/match`, { skills, interests });
