// src/components/LoginForm.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate("/admin");
    };

    return (
        <form
            onSubmit={handleSubmit}
            class="bg-white h-screen w-screen flex justify-center items-center"
        >
            <div class="px-6 py-3 rounded border w-64">
                <div class="flex flex-col items-center justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                    <h2 class="text-2xl font-bold">Login</h2>
                </div>
                <form action="#" method="POST">
                    <div class="flex flex-col my-2">
                        <label class="text-xs text-gray-400">Username</label>
                        <div class="text-xs text-red-400 flex justify-between items-center">
                            <span>
                                <b>Error: </b>
                                wrong username !
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <input
                            class="border rounded px-3 py-1 mt-2"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div class="flex flex-col my-2">
                        <label class="text-xs text-gray-400">Password</label>
                        <input
                            class="border rounded px-3 py-1 mt-2"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div class="flex flex-col items-center justify-center my-3">
                        <button
                            class="my-3 py-1 w-full rounded bg-blue-600 text-blue-200"
                            type="submit"
                        >
                            Submit
                        </button>
                        <p class="text-xs text-gray-500">
                            Forgot password ?
                            <a href="#" class="font-bold text-gray-700">
                                Click here
                            </a>
                            to reset your password.
                        </p>
                    </div>
                </form>
            </div>
        </form>
    );
};

export default LoginForm;
