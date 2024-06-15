import Inputs from "../utils/Inputs";

export default function CreateProjectScreen() {
  return (
    <section className="flex w-full items-center">
      <form>
        <Inputs type="text" title="Project Title" />
        <Inputs type="textarea" title="Description" />
        <Inputs type="date" title="Due Date" />
      </form>
    </section>
  );
}
