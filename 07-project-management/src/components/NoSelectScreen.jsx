import Logo from "../assets/no-projects.png";
import Button from "../utils/Button";

export default function NoSelectScreen({onStartCreateNew}) {
  return (
    <>
      <section className="flex w-full h-full flex-col justify-center items-center">
        <img src={Logo} alt="Project Manager" className="size-20" />
        <h1 className="font-bold text-stone-700 text-2xl">
          No Project Selected
        </h1>
        <p className="text-gray-500 text-xl my-4">
          Select a project or get started with a new one
        </p>
        <Button style="dark" onClick={onStartCreateNew}>Create New Project</Button>
      </section>
    </>
  );
}