const API_ROOT = 'http://localhost:8000';

export const APIUrls ={
    adminLogin: () => `${API_ROOT}/teacher/login`,
    adminSignup: () => `${API_ROOT}/teacher/signup`
} 