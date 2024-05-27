import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';
import toast, { Toaster } from 'react-hot-toast';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newProject, setNewProject] = useState({ name: '', description: '', image: null, category_id: '' });
    const [newCategory, setNewCategory] = useState({ name: '' });
    const [editingProject, setEditingProject] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        fetchProjects();
        fetchCategories();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            toast.error('Failed to fetch projects. Please try again.');
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            toast.error('Failed to fetch categories. Please try again.');
        }
    };

    const handleInputChange = (e, setState, state) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleFileChange = (e, setState, state) => {
        setState({ ...state, image: e.target.files[0] });
    };

    const handleAddOrUpdateProject = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const project = editingProject || newProject;
        formData.append('name', project.name);
        formData.append('description', project.description);
        if (project.image) {
            formData.append('image', project.image);
        }
        formData.append('category_id', project.category_id);

        try {
            if (editingProject) {
                await axios.put(`http://127.0.0.1:8000/api/projects/${editingProject.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                toast.success('Project updated successfully!');
            } else {
                await axios.post('http://127.0.0.1:8000/api/projects', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                toast.success('Project added successfully!');
            }
            fetchProjects();
            setNewProject({ name: '', description: '', image: null, category_id: '' });
            setEditingProject(null);
        } catch (error) {
            console.error('Error adding/updating project:', error);
            toast.error('Failed to add/update project. Please try again.');
        }
    };

    const handleAddOrUpdateCategory = async (e) => {
        e.preventDefault();
        try {
            if (editingCategory) {
                await axios.put(`http://127.0.0.1:8000/api/categories/${editingCategory.id}`, editingCategory);
                toast.success('Category updated successfully!');
            } else {
                await axios.post('http://127.0.0.1:8000/api/categories', newCategory);
                toast.success('Category added successfully!');
            }
            fetchCategories();
            setNewCategory({ name: '' });
            setEditingCategory(null);
        } catch (error) {
            console.error('Error adding/updating category:', error);
            toast.error('Failed to add/update category. Please try again.');
        }
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category);
    };

    const handleDeleteProject = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`);
            toast.success('Project deleted successfully!');
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
            toast.error('Failed to delete project. Please try again.');
        }
    };

    const handleDeleteCategory = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
            toast.success('Category deleted successfully!');
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
            toast.error('Failed to delete category. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Toaster position="top-center" reverseOrder={false} />
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <LogoutButton />

            {alert.message && (
                <div className={`alert ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-4 rounded mb-4`}>
                    {alert.message}
                </div>
            )}

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Manage Projects</h2>
                <form onSubmit={handleAddOrUpdateProject} className="mb-4 p-4 border rounded shadow-md">
                    <div className="mb-2">
                        <input
                            type="text"
                            name="name"
                            value={editingProject ? editingProject.name : newProject.name}
                            onChange={(e) => handleInputChange(e, editingProject ? setEditingProject : setNewProject, editingProject || newProject)}
                            placeholder="Project Name"
                            required
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="mb-2">
                        <textarea
                            name="description"
                            value={editingProject ? editingProject.description : newProject.description}
                            onChange={(e) => handleInputChange(e, editingProject ? setEditingProject : setNewProject, editingProject || newProject)}
                            placeholder="Project Description"
                            required
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => handleFileChange(e, editingProject ? setEditingProject : setNewProject, editingProject || newProject)}
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="mb-2">
                        <select
                            name="category_id"
                            value={editingProject ? editingProject.category_id : newProject.category_id}
                            onChange={(e) => handleInputChange(e, editingProject ? setEditingProject : setNewProject, editingProject || newProject)}
                            required
                            className="border rounded w-full py-2 px-3"
                        >
                            <option value="" disabled>Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {editingProject ? 'Update Project' : 'Add Project'}
                    </button>
                </form>
                <ul className="list-disc pl-5">
                    {projects.map((project) => (
                        <li key={project.id} className="mb-2">
                            <div className="flex justify-between items-center">
                                <span>{project.name}</span>
                                <div>
                                    <button
                                        onClick={() => handleEditProject(project)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProject(project.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Manage Categories</h2>
                <form onSubmit={handleAddOrUpdateCategory} className="mb-4 p-4 border rounded shadow-md">
                    <div className="mb-2">
                        <input
                            type="text"
                            name="name"
                            value={editingCategory ? editingCategory.name : newCategory.name}
                            onChange={(e) => handleInputChange(e, editingCategory ? setEditingCategory : setNewCategory, editingCategory || newCategory)}
                            placeholder="Category Name"
                            required
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {editingCategory ? 'Update Category' : 'Add Category'}
                    </button>
                </form>
                <ul className="list-disc pl-5">
                    {categories.map((category) => (
                        <li key={category.id} className="mb-2">
                            <div className="flex justify-between items-center">
                                <span>{category.name}</span>
                                <div>
                                    <button
                                        onClick={() => handleEditCategory(category)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCategory(category.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;
