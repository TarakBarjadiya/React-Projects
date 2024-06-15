import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className="h-screen flex gap-8 flex-row ">
        <Sidebar/>
        <MainScreen/>
      </main>
    </>
  );
}

export default App;