import Sidebar from "./components/Sidebar";
import NoSelectScreen from "./components/NoSelectScreen.jsx"
import CreateProjectScreen from "./components/CreateProjectScreen.jsx"
import ProjectAndTasks from "./components/ProjectAndTasks.jsx"
import { useState } from "react";

function App() {
  let content;
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  })

  function handleAdd(data) {
    setProjectsState(prevState => {
      const projectId = Math.random()
      const projectData = {id:projectId,...data}
      return{
        ...prevState,
        selectedProject:undefined,
        projects:[...prevState.projects,projectData]
      }
    })
  }

  function handleCancel() {
    setProjectsState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProject: undefined
      }
    })
  }

  function handleCreateNew() {
    setProjectsState(prevProjectState => {
      return {
        ...prevProjectState,
        selectedProject: null
      }
    })
  }

  content = <ProjectAndTasks />
  if (projectsState.selectedProject === undefined) {
    content = <NoSelectScreen onStartCreateNew={handleCreateNew} />
  }
  else if (projectsState.selectedProject === null) {
    content = <CreateProjectScreen onCancel={handleCancel} onAdd={handleAdd} />
  }
  
  return (
    <>
      <main className="h-screen overflow-hidden">
        <section className="grid grid-cols-5 h-full">
          <Sidebar onStartCreateNew={handleCreateNew} projectData={projectsState.projects}/>
          <section id="main-screen" className="col-start-2 col-end-6 p-5 flex flex-col overflow-auto scrollStyle">
            {content}
          </section>
        </section>
      </main >
    </>
  );
}

export default App;