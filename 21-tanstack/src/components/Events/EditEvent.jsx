import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 15000,
  });
}

//! adding below code no longer does optimistic update
//* import { redirect, useSubmit } from 'react-router-dom';
// const submit = useSubmit()
// function handleSubmit(formData) {
//   submit(formData, { method: 'PUT' });
// }
// export async function action({ request, params }) {
//   const formData = await request.formData();
//   const updatedEventData = Object.fromEntries(formData);
//   await updateEvent({ id: params.id, event: updatedEventData });
//   await queryClient.invalidateQueries(['events']);
//   return redirect('../');
// }

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const myEvent = data.event;

      await queryClient.cancelQueries({ queryKey: ['events', id] });
      const previousEvent = queryClient.getQueryData(['events', id]);

      queryClient.setQueryData(['events', id], myEvent);

      return { previousEvent }; //this is context object which is below
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(['event', id], content.previousEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || 'Failed to load event data'}
        />
        <div className="form-actions">
          <Link className="button" to="../">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
