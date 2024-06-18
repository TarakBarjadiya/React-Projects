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
    const creationDate = new Date();

    const deadlineDate = new Date(enteredDate);
    let errorMessage;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === "" ||
      deadlineDate < creationDate.setHours(0, 0, 0, 0)
    ) {
      modal.current.open();
      return;
    }
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDeadline = deadlineDate.toLocaleDateString(
      "en-GB",
      dateOptions
    );
    const formattedCreationDate = creationDate.toLocaleDateString(
      "en-GB",
      dateOptions
    );

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: formattedDeadline,
      creationDate: formattedCreationDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.<br/>
          Also make sure you have not choose past date for due date.
        </p>
      </Modal>
      <section className="flex w-full h-full items-center flex-col justify-center">
        <Inputs ref={title} type="text" title="Project Title" />
        <Inputs type="textarea" title="Description" ref={description} />
        <Inputs type="date" title="Due Date" ref={date} />
        <p className="font-medium text-xs text-stone-500 w-full mt-2 -mb-3">*Every fields are mandatory.</p>
        <section className="flex w-full space-x-0 m-2">
          <Button style="dark" onClick={handleSave}>
            Create
          </Button>
          <Button style="textOnly" onClick={onCancel}>
            Cancel
          </Button>
        </section>
      </section>
    </>
  );
}
