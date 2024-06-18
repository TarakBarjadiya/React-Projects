export default function Button({ children, style, className, ...props }) {
  let buttonClass =
    "w-auto p-2 cursor-pointer pointer m-6 rounded-md font-medium border-2 hover:border-2 ease-in-out duration-150";

  if (style === "light") {
    buttonClass +=
      " bg-neutral-200 text-stone-900 hover:bg-stone-900 hover:text-neutral-200 hover:border-neutral-200";
  }
  if (style === "dark") {
    buttonClass +=
      " bg-stone-900 text-neutral-200 hover:bg-neutral-200 hover:text-stone-900 hover:border-stone-900";
  }
  if (style === "textOnly") {
    buttonClass = "w-auto p-2 m-6 font-medium text-stone-600 hover:text-stone-900"
  }
  if (style === "deleteButton") {
    buttonClass= "w-auto font-medium text-stone-600 hover:text-red-700"
  }
  return <button className={buttonClass} {...props}>{children}</button>;
}
