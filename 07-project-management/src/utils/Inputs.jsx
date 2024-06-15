export default function Inputs({ title, type }) {
  return (
    <section className="flex flex-col w-full">
      <label className="uppercase font-bold text-base m-2 text-stone-700">{title}</label>
      {type === "textarea" ? (
        <textarea/>
      ) : (
        <input className="bg-neutral-300 w-fit" type={type} name={title} />
      )}
    </section>
  );
}
