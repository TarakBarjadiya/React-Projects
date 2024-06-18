import { useRef } from "react";
import Button from "../utils/Button";
import Inputs from "../utils/Inputs";
import Modal from "./Modal";

export default function CreateProjectScreen({ onCancel, onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
      modal.current.open();
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <section className="flex w-full h-full items-center flex-col justify-center">
        <Inputs ref={title} type="text" title="Project Title" />
        <Inputs type="textarea" title="Description" ref={description} />
        <Inputs type="date" title="Due Date" ref={date} />
        <section className="flex w-full space-x-0 m-2">
          <Button style="dark" onClick={handleSave}>Create</Button>
          <Button style="textOnly" onClick={onCancel}>Cancel</Button>
        </section>
      </section>
    </>
  );
}