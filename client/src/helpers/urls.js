const API_ROOT = 'http://localhost:8000';

export const APIUrls ={
    adminLogin: () => `${API_ROOT}/teacher/login`,
    adminSignup: () => `${API_ROOT}/teacher/signup`,
    userLogin: () => `${API_ROOT}/user/login`,
    userSignup: () => `${API_ROOT}/user/signup`,
} 