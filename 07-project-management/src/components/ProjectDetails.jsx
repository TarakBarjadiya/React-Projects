import Button from "../utils/Button.jsx";

export default function ProjectDetails() {
  return (
    <>
        <section className="flex w-full place-self-start items-center mt-28 justify-between">
          <h1 className="text-4xl font-bold text-stone-600">TITLE</h1>
          <Button style="deleteButton">Delete Project</Button>
        </section>
          <p className="text-base my-4 font-medium text-neutral-500">24 June,2024</p>
          <p className="text-base font-medium text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum optio quibusdam, ut unde quisquam aspernatur hic corrupti ea, eius vero</p>
          <hr className="border-stone-400 mr-60 my-3 border-2"/>
    </>
  );
}
