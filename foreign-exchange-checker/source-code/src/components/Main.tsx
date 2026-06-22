import Converter from "./Converter";
import Stats from "./Stats";

function Main() {
  return (
    <main className="main">
      <h1 className="converter__heading">CHECK THE RATE</h1>
      <div className="main__content">
        <Converter />
        <Stats />
      </div>
    </main>
  );
}

export default Main;
