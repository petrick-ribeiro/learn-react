import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import painting from "./images/painting.jpg"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
      image={painting}
      rating="4.7"
      reviewCount={25}
      country="USA"
      title="Learn professional Painting"
      price={75}
      />
    </div>
  );
}

export default App;
