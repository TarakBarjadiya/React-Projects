import Button from "../utils/Button.jsx";

export default function ProjectDetails({
  onProjectDelete,
  title,
  description,
  creationDate,
  dueDate,
}) {
  return (
    <>
      <section className="flex w-full place-self-start items-center mt-28 justify-between text-wrap">
        <h1 className="text-4xl font-bold text-stone-600 w-3/4 break-words text-balance">
          {title}
        </h1>
        <Button onClick={onProjectDelete} style="deleteButton">
          Delete Project
        </Button>
      </section>
      <p className="text-base mt-4 font-medium text-neutral-500">
        Creation Date: {creationDate}
      </p>
      <p className="text-base mb-4 font-medium text-neutral-500">
        Deadline: {dueDate}
      </p>
      <p className="text-base font-medium text-neutral-700">
        <span className="italic underline">Project Details:</span>
        <br />
        {description}
      </p>
      <hr className="border-stone-400 mr-60 my-3 border-2" />
    </>
  );
}
