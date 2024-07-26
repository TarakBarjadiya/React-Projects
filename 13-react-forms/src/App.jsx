import Header from './components/Header.jsx';
// import LoginWithRefs from './components/LoginWithRefs.jsx';
import LoginWithState from './components/LoginWithState.jsx';
// import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Signup /> */}
        <LoginWithState />
        {/* <LoginWithRefs /> */}
      </main>
    </>
  );
}

export default App;
