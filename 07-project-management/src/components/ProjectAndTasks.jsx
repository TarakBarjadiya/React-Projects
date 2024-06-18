import ProjectDetails from "./ProjectDetails.jsx";
import Tasks from "./Tasks.jsx";

export default function ProjectAndTasks() {
    return (
        <>
            <section className="flex w-full flex-col">
                <ProjectDetails />
                <Tasks />
            </section>
        </>
    )
}