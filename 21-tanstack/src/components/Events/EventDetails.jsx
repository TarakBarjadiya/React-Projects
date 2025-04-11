import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, isPending, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ id: id, signal }),
  });

  const {
    mutate,
    isPending: isDeletingPending,
    error: deleteError,
    isError: isDeletingError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });
      navigate('/events');
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDeleteEvent() {
    mutate({ id });
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Delete this event?</h2>
          <p>Do you want to delete &apos;{data.title}&apos; event.</p>
          <div className="form-actions">
            {isDeletingPending && <p>Deleting Event...</p>}
            {!isDeletingPending && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Close
                </button>
                <button onClick={handleDeleteEvent} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {isDeletingError && (
            <ErrorBlock
              title="Error deleting event"
              message={deleteError.info?.message}
            />
          )}
        </Modal>
      )}

      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && (
        <p style={{ textAlign: 'center' }}>Loading Event Data...</p>
      )}
      {isError && (
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || 'Failed to load event details'}
        />
      )}
      <article id="event-details">
        {data && (
          <>
            <header>
              <h1>{data.title}</h1>
              <nav>
                <button onClick={handleStartDelete}>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img
                src={`http://localhost:3000/` + data.image}
                alt="Event Image"
              />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>
                    {data.date} @ {data.time}
                  </time>
                </div>
                <p id="event-details-description">{data.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
