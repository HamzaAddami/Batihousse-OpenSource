import axios from "axios";
import React, { useEffect, useState } from "react";

const References = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/projects")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the projects!",
                    error
                );
            });
    }, []);

    return (
        <div>
            <h1>Projects</h1>

            {projects.map((project) => (
                // <li key={project.id}>{project.name}</li>
                <div className="max-w-md w-full bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden" key={project.id}>
                    <img
                        className="w-full h-64 object-cover object-center"
                        src="https://placehold.co/500x300"
                        alt="Project Image"
                        crossOrigin="anonymous"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">
                            {project.name}
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-lg">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default References;
