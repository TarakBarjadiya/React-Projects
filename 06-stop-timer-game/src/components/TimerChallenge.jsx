export default function TimerChallenge({ title, targrtTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targrtTime} second{targrtTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>
            Start Challenge
        </button>
      </p>
      <p className="">
        Time is Running /Timer Inactive
      </p>
    </section>
  );
}
