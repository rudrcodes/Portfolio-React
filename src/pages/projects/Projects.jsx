import ProjectCard from "./ProjectCard"

const Projects = () => {
    // abhi ke liye hard code , baad mein backend se fetch krunga
    const projectData = [
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
        {
            id: 1,
            projectName: "projectName",
            projectImg: "projectImg",
            projectHostedUrl: "projectHostedUrl",
            projectGithubUrl: "projectGithubUrl"
        },
     
    ]
    return (
        <div
            className='bg-green-800 flex-1 flex justify-center items-center text-white text-3xl font-bold w-full flex-col py-5'
        >
            Projects
            <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
                {/* <ul className="flex justify-center items-center gap-1 sm:flex-col md:flex-row sm:flex-wrap md:flex-nowrap"> */}
                {projectData.length > 0 && projectData.map((project) => (
                    <ProjectCard key={project.id}
                        projid={project.id}
                        projName={project.projectName}
                        projectImg={project.projectImg}
                        projectHostedUrl={project.projectHostedUrl}
                        projectGithubUrl={project.projectGithubUrl}

                    />
                ))}

            </ul>

        </div>
    )
}
export default Projects