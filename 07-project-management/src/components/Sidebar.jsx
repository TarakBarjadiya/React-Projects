import Button from "../utils/Button";

let ulClass = "bg-stone-800 bg-opacity-30 font-medium m-2 overflow-hidden";
let liClass =
  "w-full text-left cursor-pointer px-2 py-1 rounded-sm my-1 truncate hover:text-stone-600 hover:bg-stone-800 hover:tracking-wider";

export default function Sidebar({
  onStartCreateNew,
  projectData,
  onProjectSelect,
  selectedId,
}) {
  if (projectData.length > 0) {
    ulClass += "visible";
  } else {
    ulClass += "hidden";
  }

  return (
    <>
      <section className="col-span-1 bg-stone-900 p-5 h-full w-1/5 fixed overflow-y-auto scrollStyle">
        <h1 className="text-neutral-200 p-6 font-semibold text-2xl uppercase mt-14">
          Your Projects
        </h1>
        <Button style="light" onClick={onStartCreateNew}>
          Add New +
        </Button>
        {projectData.length == 0 ? (
          <>
            <div className="container flex h-2/4 justify-center items-center">
              <p className="text-neutral-200 font-medium m">
                You don't have any projects yet.
              </p>
            </div>
          </>
        ) : (
          <ul className={ulClass}>
            {projectData.map((project) => {
              let spanClass = "p-3";
              let dueDateClass = "text-xs font-medium";

              if (project.id === selectedId) {
                spanClass += "bg-stone-800 text-stone-200 tracking-wider";
                dueDateClass += "bg-stone-800 text-stone-500 tracking-wider";
              } else {
                spanClass += "text-stone-400";
              }

              return (
                <li
                  onClick={() => onProjectSelect(project.id)}
                  key={project.id}
                  className={liClass}
                >
                  <span className={spanClass}>{project.title}</span>
                  <div className={dueDateClass}>deadline: {project.date}</div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
