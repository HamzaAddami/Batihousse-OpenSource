import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorieSlice";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [text] = useTypewriter({
        words: [" NOS Réferences"],
        loop: {},
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await axios.get(
                    "http://localhost:8000/api/projects"
                );
                setProjects(projectsResponse.data);
                setFilteredProjects(projectsResponse.data);

                const categoriesResponse = await axios.get(
                    "http://localhost:8000/api/categories"
                );
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const results = projects.filter((project) =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(results);
        setSearchTerm('');
    };

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category);

    const handleCategoryClick = (category) => {
        dispatch(setCategory(category));
        if (category === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(
                (project) => project.category_id === category.id
            );
            setFilteredProjects(filtered);
        }
    };

    return (
        <div id="font-family">
            <div
                class=" text-primary border bg-card text-card-foreground shadow-sm mb-12 bg-quaternary uppercase"
                data-v0-t="card"
            >
                <div class="py-10 text-center">
                    <h1
                        class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        id="slimar"
                    >
                        <span className="text-quaternary">\</span>
                        {text}
                        <Cursor
                            class="text-primary"
                            data-v0-t="cursor"
                        ></Cursor>
                    </h1>
                </div>
            </div>
            <div className="my-5 flex flex-wrap gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden items-center justify-center">
                <button
                    onClick={() => handleCategoryClick("All")}
                    className={`px-3 py-2 uppercase bg-primary text-white font-bold  hover:bg-tertiary hover:text-white ${
                        selectedCategory === "All" && "bg-tertiary text-white"
                    }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        onClick={() => handleCategoryClick(category)}
                        key={category.id}
                        className={`px-3 py-2 bg-primary text-white font-bold  hover:bg-tertiary hover:text-white uppercase ${
                            selectedCategory === category.id && "bg-tertiary text-white"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="flex justify-center items-center">
               <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by project name"
                className="border p-2"
            />
            <button
                type="button"
                onClick={handleSearch}
                className="px-4 py-2 bg-tertiary text-white"
            >
                Search
            </button> 
            
            </div>
            

            <div class="flex flex-wrap items-center justify-center lg:justify-start mb-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 group"
                    >
                    
                        <img
                            src={project.image_url}
                            alt={project.name}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <div className="z-10 mt-3 flex justify-between items-center w-full">
                            <h3 className="text-xl font-bold text-white">
                                {project.name}
                            </h3>
                        </div>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                            {project.state}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <div className="text-center">
                
                                <Link
                                    to={`/projects/${project.name}`}
                                    className="inline-block px-4 py-2 bg-tertiary text-white rounded-full"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <p className="mt-4 text-red-500">
                    No projects found for this search term or category.
                </p>
            )}
        </div>
    );
};

export default CategoryMenu;
