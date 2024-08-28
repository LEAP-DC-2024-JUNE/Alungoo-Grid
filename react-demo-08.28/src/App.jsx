import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex">
        <Section />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
