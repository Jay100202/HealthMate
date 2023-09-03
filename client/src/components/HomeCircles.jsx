import React from "react";
import CountUp from "react-countup";
import { FaSmile, FaUserMd, FaUserNurse } from "react-icons/fa"; // Import relevant icons
import "../styles/homecircles.css"; // Import your custom styles here

const CircleData = [
  { value: 1000, label: "Happy Patients", icon: <FaSmile /> },
  { value: 250, label: "Verified Doctors", icon: <FaUserMd /> },
  { value: 75, label: "Specialist Experts", icon: <FaUserNurse /> },
];

const HomeCircles = () => {
  return (
    <section className="container circles">
      {CircleData.map((circle, index) => (
        <div className="circle" key={index}>
          <CountUp
            start={0}
            end={circle.value}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={500}
          >
            {({ countUpRef }) => (
              <div className="counter">
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <span className="circle-icon">{circle.icon}</span>
          <span className="circle-name">{circle.label}</span>
        </div>
      ))}
    </section>
  );
};

export default HomeCircles;
