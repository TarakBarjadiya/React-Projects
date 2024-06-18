import Sidebar from "./components/Sidebar";
import NoSelectScreen from "./components/NoSelectScreen.jsx";
import CreateProjectScreen from "./components/CreateProjectScreen.jsx";
import ProjectAndTasks from "./components/ProjectAndTasks.jsx";
import { useState } from "react";

function App() {
  let content;
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const taskText = task;
      const taskId = Math.random();

      const newTask = {
        taskId,
        taskProjectId: prevState.selectedProjectId,
        taskText,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleDeleteProject() {
    if (confirm("Do you want to delete your current project?")) {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: prevState.projects.filter(
            (project) => project.id !== prevState.selectedProjectId
          ),
        };
      });
    } else {
      return;
    }
  }

  function handleProjectSelect(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAdd(data) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const projectData = { id: projectId, ...data };
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, projectData],
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleCreateNew() {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: null,
      };
    });
  }

  const selectedProjectId = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  const taskOfProject = projectsState.tasks.filter(
    (task) => task.taskProjectId === projectsState.selectedProjectId
  );

  content = (
    <ProjectAndTasks
      selectedProjectId={selectedProjectId}
      onProjectDelete={handleDeleteProject}
      onTaskAdd={handleAddTask}
      onTaskClear={handleDeleteTask}
      taskDetail={taskOfProject}
    />
  );
  if (projectsState.selectedProjectId === undefined) {
    content = <NoSelectScreen onStartCreateNew={handleCreateNew} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <CreateProjectScreen onCancel={handleCancel} onAdd={handleAdd} />;
  }

  return (
    <>
      <main className="h-screen overflow-hidden">
        <section className="grid grid-cols-5 h-full">
          <Sidebar
            onStartCreateNew={handleCreateNew}
            projectData={projectsState.projects}
            onProjectSelect={handleProjectSelect}
            selectedId={projectsState.selectedProjectId}
          />
          <section
            id="main-screen"
            className="col-start-2 col-end-6 p-5 flex flex-col overflow-auto scrollStyle"
          >
            {content}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
