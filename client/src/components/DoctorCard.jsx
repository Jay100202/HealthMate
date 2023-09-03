import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [phoneNumber, setPhoneNumber] = useState(generateDefaultMobile());

  // Function to generate a default 10-digit mobile number
  function generateDefaultMobile() {
    const uniqueNumber = Math.floor(Math.random() * 10000000000); // Generates a random 10-digit number
    return `555-555-${uniqueNumber.toString().padStart(4, "0")}`; // Formats the number
  }

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            ele?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        Dr. {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      <p className="specialization">
        <strong>Specialization: </strong>
        {ele?.specialization}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}yrs
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>$ {ele?.fees}
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {phoneNumber}
      </p>
      <button className="btn appointment-btn" onClick={handleModal}>
        Book Appointment
      </button>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={ele} />}
    </div>
  );
};

export default DoctorCard;
