import Button from "../utils/Button";

let liClass = "my-2 relative cursor-pointer overflow-x-hidden hover:text-neutral-200 hover:tracking-wide hover:tooltip"

export default function Sidebar({ onStartCreateNew, projectData }) {
  console.log(projectData, typeof (projectData))
  return (
    <>
      <section className="col-span-1 bg-stone-900 p-5 h-full w-1/5 fixed overflow-y-auto scrollStyle">
        <h1 className="text-neutral-200 p-6 font-semibold text-2xl uppercase mt-14">
          Your Projects
        </h1>
        <Button style="light" onClick={onStartCreateNew}>Add New +</Button>
        <ul className="bg-stone-800 bg-opacity-30 text-neutral-400 font-medium m-2 p-2">
          {projectData.map((project) => (
            <li className={liClass}>
              <span className="block whitespace-nowrap text-ellipsis overflow-hidden">{project.title}</span>
              <div className="tooltip">{project.title}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}