// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            setToken(response.data.token);
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/logout');
            setUser(null);
            setToken('');
            localStorage.removeItem('token');
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


