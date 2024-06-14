import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targrtTime={1}/>
        <TimerChallenge title={"Not Easy"} targrtTime={5}/>
        <TimerChallenge title={"Getting Tough"} targrtTime={10}/>
        <TimerChallenge title={"Pros Only"} targrtTime={15}/>
      </div>
    </>
  );
}

export default App;
