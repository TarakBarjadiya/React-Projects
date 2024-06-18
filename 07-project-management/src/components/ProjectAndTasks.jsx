import ProjectDetails from "./ProjectDetails.jsx";
import Tasks from "./Tasks.jsx";

export default function ProjectAndTasks({
  selectedProjectId,
  onProjectDelete,
  onTaskAdd,
  onTaskClear,
  taskDetail
}) {
  const title = selectedProjectId.title;
  const descr = selectedProjectId.description;
  const creationDate = selectedProjectId.creationDate;
  const dueDate = selectedProjectId.date;
  console.log(taskDetail)
  return (
    <>
      <section className="flex w-full flex-col">
        <ProjectDetails
          onProjectDelete={onProjectDelete}
          title={title}
          description={descr}
          creationDate={creationDate}
          dueDate={dueDate}
        />
        <Tasks onTaskAdd={onTaskAdd} onDelete={onTaskClear} taskDetail={taskDetail}/>
      </section>
    </>
  );
}
