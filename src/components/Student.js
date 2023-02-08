import React from "react";

const Student = ({ data, currentInd }) => {
  return (
    <div className="s-container">
      <div className="left">
        <img
          src={data[currentInd].image}
          alt="imag"
          className="stu-img"
          width="80%"
          height="50%"
        />
        <p className="stu-name">{data[currentInd].name}</p>
      </div>
      <div className="right">
        <p>{data[currentInd].feedback}</p>
        <p className="read-more">Read More</p>
      </div>
    </div>
  );
};

export default Student;
