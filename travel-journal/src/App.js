import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const locations = data.map((item) => {
    return <Main key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Navbar />
      {locations}
    </div>
  );
}

export default App;
