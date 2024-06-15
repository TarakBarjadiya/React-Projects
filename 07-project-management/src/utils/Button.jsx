export default function Button({children, ...props}){
    return(
        <button className="bg-neutral-200 w-max p-2 mx-6 mt-3 rounded font-medium text-stone-900 border-2 hover:bg-stone-900 hover:text-neutral-200 hover:border-neutral-200 hover:border-2 ease-in-out duration-150">
            {children}
        </button>
    )
}