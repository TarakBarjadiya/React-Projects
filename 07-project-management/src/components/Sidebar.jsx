import Button from "../utils/Button";

export default function Sidebar() {
  return (
    <>
      <section className="bg-stone-900 basis-1/4 flex-col rounded-tr-3xl mt-10 w-80">
        <h1 className="text-neutral-200 p-6 font-semibold text-2xl uppercase mt-14">
          Your Projects
        </h1>
        <Button>Add New +</Button>
      </section>
    </>
  );
}
