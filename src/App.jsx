import "./App.css";
import Banner from "./files/Banner";
import Contact from "./files/Contact";
import Education from "./files/Education";
import Experience from "./files/Experience";
import Feedback from "./files/Feedback";
import Header from "./files/Header";
import Projects from "./files/Projects";
import Skills from "./files/Skills";
import { RxPinTop } from "react-icons/rx";

function App() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Feedback />
      <Contact />
      <div
        onClick={scrolltoTop}
        className="fixed bottom-8 right-8 bg-black text-white p-2 text-xl cursor-pointer z-10 rounded-full shadow-2xl"
      >
        <RxPinTop />
      </div>
    </>
  );
}

export default App;
