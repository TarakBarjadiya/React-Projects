import Button from "../utils/Button"

export default function Tasks() {
    let inputClass = "w-2/6 p-1 outline-none bg-neutral-300 text-stone-700 font-medium rounded-l-md"
    let addTaskButtonClass = "p-2 font-medium bg-stone-900 text-neutral-200 hover:bg-neutral-400 hover:text-stone-900 hover:border-stone-900 rounded-r-md"
    let listContainerClass = "flex w-full flex-col bg-neutral-200 my-5 p-2 rounded-md overflow-auto scrollStyle"
    let liClass = "flex w-full justify-between px-2 my-2"
    let spanClass = "font-mono max-w-2xl text-lg font-semibold truncate"

    return (
        <>
            <h1 className="font-bold text-3xl mt-2 text-stone-900">Tasks</h1>
            <section className="flex flex-row mt-5">
                <input className={inputClass} />
                <button className={addTaskButtonClass}>Add Task</button>
            </section>
            <section className={listContainerClass}>
                <ul>
                    <li className={liClass}>
                        <span className={spanClass}>hello 1</span>
                        <Button style="deleteButton">Clear</Button>
                    </li>
                </ul>
            </section >
        </>
    )
}