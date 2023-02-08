import "./App.css";
import Student from "./components/Student";
import students from "./components/data";
import { useState } from "react";
function App() {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    if (index <= 0) {
      setIndex(students.length - 1);
    }
    setIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (index >= students.length - 1) {
      setIndex(0);
    }
    setIndex((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h1 className="heading">
        <span className="head">Thausands </span>of lives changed
      </h1>
      <p className="heading--sub">
        Hear it from the ones who have been on this journey already
      </p>
      <div className="card">
        <Student data={students} currentInd={index} />
        <button className="testimony">Read More Testimonials</button>
      </div>
      <button className="prev" onClick={handlePrev}>
        ◀
      </button>
      <button className="next" onClick={handleNext}>
        ▶
      </button>
      <img src={students[0].image} alt="fisrt-img " className="img first" />
      <img src={students[1].image} alt="second-img" className="img second" />
      <img src={students[2].image} alt="third-img" className="img third" />
      <img src={students[3].image} alt="fourth-img" className="img fourth" />
      <img src={students[4].image} alt="fifth-img" className="img fifth" />
    </div>
  );
}

export default App;
