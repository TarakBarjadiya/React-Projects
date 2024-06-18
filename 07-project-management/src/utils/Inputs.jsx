import { forwardRef } from "react";

const Inputs = forwardRef(function Inputs({ title, type},ref) {
  const inputClass = "bg-neutral-300 text-neutral-600 w-full p-1 border-stone-400 border-b-2 focus:outline-none focus:border-stone-600 font-semibold focus:text-stone-900"
  const textareaClass = "bg-neutral-300 text-neutral-600 w-full p-1 overflow-auto resize-none border-stone-400 border-b-2 focus:outline-none focus:border-stone-600 font-semibold focus:text-stone-900 scrollStyle"

  return (
    <section className="flex flex-col w-full">
      <label className="uppercase font-bold text-base my-2 text-stone-700">{title}</label>
      {type === "textarea" ? (
        <textarea ref={ref}  className={textareaClass} rows={4}/>
      ) : (
        <input ref={ref} className={inputClass} type={type} name={title} />
      )}
    </section>
  );
})

export default Inputs