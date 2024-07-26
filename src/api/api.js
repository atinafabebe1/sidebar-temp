import axios from 'axios';

const BaseUri = 'http://localhost:5002/api';
// const BaseUri = 'https://goal-api-776y.onrender.com/api';

// auth
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `${BaseUri}/auth/login`,
            { email, password },
            {
                withCredentials: true,
                headers: {
                    'Client-Type': 'web'
                }
            }
        );
        return response.data;
    } catch (error) {
        return error?.response;
    }
};

export const registerUser = async (email, password, first_name, last_name) => {
    try {
        const response = await axios.post(`${BaseUri}/auth/register`, { email, password, first_name, last_name });
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error);
        return error.response;
    }
};

export const addNewUser = async (email, password, first_name, last_name, role) => {
    try {
        const response = await axios.post(`${BaseUri}/auth/register/team`, { email, password, first_name, last_name, role }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error);
        return error.response;
    }
};

export const getMe = async () => {
    try {
        const response = await axios.get(`${BaseUri}/auth/me`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error);
        return error.response;
    }
};

export const registerTeam = async (email, password, first_name, last_name, role) => {
    try {
        const response = await axios.post(`${BaseUri}/auth/register/team`, { email, password, first_name, last_name, role });
        return response.data;
    } catch (error) {
        console.error('Registration failed:', error);
        return error.response;
    }
};

export const logoutUser = async () => {
    try {
        const response = await axios.get(`${BaseUri}/auth/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Logout failed:', error);
        return error.response;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${BaseUri}/auth/users`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Get users failed:', error);
        return error.response;
    }
};

export const signUpWithGoogle = async (googleToken) => {
    try {
        const response = await axios.post(`${BaseUri}/auth/signup/google`, { token: googleToken }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Google Sign-Up failed:', error);
        return error.response;
    }
};

export const verifyEmail = async (verificationToken) => {
    try {
        const response = await axios.post(`${BaseUri}/auth/verify`, { token: verificationToken }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Email Verification failed:', error);
        return error.response;
    }
};

// School
export const addSchool = async ({ ...formData }) => {
    try {
        const response = await axios.post(`${BaseUri}/school`, { ...formData }, { withCredentials: true });
        return response;
    } catch (error) {
        console.error('School add failed:', error);
        return error.response;
    }
};

// Project 
export const addProject = async ({ ...formData }) => {
    console.log(formData);
    try {
        const response = await axios.post(`${BaseUri}/project/${formData.schoolId}`, { ...formData }, { withCredentials: true });
        return response;
    } catch (error) {
        console.error('Project add failed:', error);
        return error.response;
    }
};

export const getSchools = async (query) => {
    try {
        const response = await axios.get(`${BaseUri}/school?${query}`);
        return response.data;
    } catch (error) {
        console.error('Get schools failed:', error);
        return error.response;
    }
};

export const getSchoolProjects = async (id) => {
    try {
        const response = await axios.get(`${BaseUri}/project?school=${id}`);
        return response.data;
    } catch (error) {
        console.error('Get school projects failed:', error);
        return error.response;
    }
};

export const getProjects = async (query) => {
    try {
        const response = await axios.get(`${BaseUri}/project?${query}`);
        return response.data;
    } catch (error) {
        console.error('Get projects failed:', error);
        return error.response;
    }
};

export const getSchool = async (id) => {
    try {
        const response = await axios.get(`${BaseUri}/school?_id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Get school failed:', error);
        return error.response;
    }
};
