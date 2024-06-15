import CreateProjectScreen from "./CreateProjectScreen.jsx";
import NoSelectScreen from "./NoSelectScreen.jsx";

export default function MainScreen() {
  return (
    <section id="main-screen" className="flex basis-3/4">
      {/* <NoSelectScreen /> */}
      <CreateProjectScreen/>
    </section>
  );
}
