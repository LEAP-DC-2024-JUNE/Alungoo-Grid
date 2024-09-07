import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex">
        <Section />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

// function App() {
//   const name = "Billy";
//   function printNAme(param) {
//     return <div>{param}</div>;
//   }
//   return <div>Hello {printNAme("Alungoo")}</div>;
// }
// export default App;

// function App() {

//   const user = "Billy";
//   if (user) {
//     return <div>Hello</div>;
//   } else {
//     return <div>User Not Found</div>;
//   }
// }
export default App;
