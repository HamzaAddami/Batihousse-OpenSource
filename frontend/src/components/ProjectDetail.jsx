import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetail = () => {
    const { projectid } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/projects/${projectid}`
                );
                setProject(response.data);
            } catch (error) {
                setError("Error fetching project details");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [projectid]);

    if (loading) {
        return (
            <div class="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row my-11">
                <div class="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
                <div class="flex flex-col flex-1 gap-5 sm:p-2">
                    <div class="flex flex-col flex-1 gap-3">
                        <div class="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                    </div>
                    <div class="flex gap-3 mt-auto">
                        <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        <div class="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4" id="font-family">
                <div class="rounded-lg overflow-hidden">
                    <img
                        src={project.image_url}
                        width="600"
                        height="400"
                        alt="Project Image"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="space-y-6">
                <div className="bg-tertiary text-white p-4 rounded-lg">
                        <h2 className="text-xl font-bold">{project.name}</h2>
                      </div>
                    <div class="flex items-center justify-between">
                    <p class="text-xl font-bold max-sm:text-sm">Client : <span className="text-md text-semibold text-gray-500 ">{project.client}</span></p><hr />
                        <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            {project.state}
                        </div>
                    </div><hr />
                    <p class="text-xl font-bold max-sm:text-sm">Prix : <span className="text-md text-semibold text-gray-500 ">{project.price} millions MAD</span></p>
                    <p class="text-xl font-bold max-sm:text-sm">Mission : <span className="text-md text-semibold text-gray-500 ">{project.mission}</span></p><hr />
                    <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        role="progressbar"
                        data-state="indeterminate"
                        data-max="100"
                        class="relative h-2 w-full overflow-hidden rounded-full bg-tertiary"
                    >
                        <div
                            data-state="indeterminate"
                            data-max={project.avancement}
                            class="h-full w-full flex-1 bg-tertiary transition-all"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;

//   <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-zinc-800 shadow-md rounded-lg">
//                   <div className="flex flex-col md:flex-row">
//                     <img src={project.imagr_url} className="w-full md:w-1/2 rounded-lg"/>
//                     <div className="mt-4 md:mt-0 md:ml-6 flex-1">
//                       <div className="bg-zinc-700 text-white p-4 rounded-lg">
//                         <h2 className="text-xl font-bold">{project.name}</h2>
//                       </div>
//                       <div className="mt-2 text-zinc-600 dark:text-zinc-300">
//                         <p className="flex items-center">
//                           <span className="mr-2">📂</span>
//                           <span>Bureaux, Immeubles de bureaux</span>
//                         </p>
//                         <p className="mt-2">{project.description}</p>
//                       </div>
//                       <div className="mt-4">
//                         <h3 className="font-bold text-zinc-800 dark:text-zinc-200">AVANCEMENT DU PROJET</h3>
//                         <div className="flex items-center mt-1">
//                           <div className="w-full bg-zinc-300 dark:bg-zinc-600 h-2 rounded-full">
//                             <div className="bg-zinc-800 dark:bg-zinc-200 h-2 rounded-full"></div>
//                           </div>
//                           <span className="ml-2 text-zinc-800 dark:text-zinc-200">100%</span>
//                         </div>
//                       </div>
//                       <div className="mt-4 text-zinc-600 dark:text-zinc-300">
//                         <p><strong>CLIENT :</strong> {project.client}</p>
//                         <p><strong>DÉLAI :</strong> 18 mois</p>
//                         <p><strong>MISSION DE PROBUILDING :</strong>{project.mission}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
