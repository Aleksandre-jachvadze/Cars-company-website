import "remixicon/fonts/remixicon.css";
import "./App.css";
import Book from "./Components/Book";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Accordion from "./Components/Accordian";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
