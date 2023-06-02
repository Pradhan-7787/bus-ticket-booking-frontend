import React, { useEffect, useState } from "react";
import "./BusTicketBooking.css";
import steeringIcon from "../Assets/2087.png";
import { Button } from "react-bootstrap";
import ModalComponent from "../Components/BookingModal";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const TicketBooking = () => {
  const history = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [localStorageData, setLocalStorageData] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  let row1 = [1, 4, 7, 10, 13];
  let row2 = [2, 5, 8, 11, 14];
  let row3 = [3, 6, 9, 12, 15];
  let row4 = [16, 17, 18, 19, 20];
  let row5 = [21, 24, 27, 30, 33];
  let row6 = [22, 25, 28, 31, 34];
  let row7 = [23, 26, 29, 32, 35];
  let row8 = [36, 37, 38, 39, 40];

  const handleNumberSelect = (number) => {
    if (selectedNumbers.includes(number)) {
      // Number already selected, remove it from the array
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      // Number not selected, add it to the array
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };
  // const year = startDate.getFullYear();
  // const month = String(startDate.getMonth() + 1).padStart(2, "0");
  // const day = String(startDate.getDate()).padStart(2, "0");
  // const selectedDate = `${year}-${month}-${day}`;
  let selectedDate = startDate.toLocaleDateString()
  // console.log(startDate.toLocaleDateString())
  const handleFormSubmit = async (formData) => {
    let finalFormData = {
      ...formData,
      seatNumbers: selectedNumbers,
      date: selectedDate,
    };
    let newData;
    if (localStorageData === null) {
      newData = [finalFormData];
    } else {
      newData = [...localStorageData, finalFormData];
    }
    localStorage.setItem("formData", JSON.stringify(newData));
    fetchData();
    setSelectedNumbers([]);
    history("/dashboard");
  };
  useEffect(() => {
    fetchData();
  }, [startDate]);
  const fetchData = async () => {
    let allData = localStorage.getItem("formData");
    setLocalStorageData(JSON.parse(allData));
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h3>Select A Date</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br />
      <br />
      <br />
      <h3>Lower Deck</h3>
      <div className="card" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                style={{ maxHeight: "60px" }}
                src={steeringIcon}
                alt="Logo"
              />
            </div>
            <div className="col-8" style={{ height: "100%" }}>
              <div>
                {row1.map((number) => {
                  const isDisabled = localStorageData?.some(
                    (booking) =>
                      booking.date === selectedDate &&
                      booking.seatNumbers.includes(number)
                  );

                  return (
                    <button
                      key={number}
                      disabled={isDisabled}
                      className={`btn ${
                        selectedNumbers.includes(number)
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => handleNumberSelect(number)}
                    >
                      {number}
                    </button>
                  );
                })}
                <br /> <br />
                {row2.map((number) => {
                  const isDisabled = localStorageData?.some(
                    (booking) =>
                      booking.date === selectedDate &&
                      booking.seatNumbers.includes(number)
                  );

                  return (
                    <button
                      key={number}
                      disabled={isDisabled}
                      className={`btn ${
                        selectedNumbers.includes(number)
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => handleNumberSelect(number)}
                    >
                      {number}
                    </button>
                  );
                })}
              </div>

              <br />
              <br />
              <br />
              {row3.map((number) => {
                const isDisabled = localStorageData?.some(
                  (booking) =>
                    booking.date === selectedDate &&
                    booking.seatNumbers.includes(number)
                );

                return (
                  <button
                    key={number}
                    disabled={isDisabled}
                    className={`btn ${
                      selectedNumbers.includes(number)
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                    onClick={() => handleNumberSelect(number)}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
            <div className="col-2">
              {row4.map((number) => {
                const isDisabled = localStorageData?.some(
                  (booking) =>
                    booking.date === selectedDate &&
                    booking.seatNumbers.includes(number)
                );

                return (
                  <button
                    key={number}
                    disabled={isDisabled}
                    style={{ marginBottom: "5px" }}
                    className={`btn ${
                      selectedNumbers.includes(number)
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                    onClick={() => handleNumberSelect(number)}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h3>Upper Deck</h3>
      <div className="card" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8" style={{ height: "100%" }}>
              <div>
                {row5.map((number) => {
                  const isDisabled = localStorageData?.some(
                    (booking) =>
                      booking.date === selectedDate &&
                      booking.seatNumbers.includes(number)
                  );

                  return (
                    <button
                      key={number}
                      disabled={isDisabled}
                      className={`btn ${
                        selectedNumbers.includes(number)
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => handleNumberSelect(number)}
                    >
                      {number}
                    </button>
                  );
                })}
                <br /> <br />
                {row6.map((number) => {
                  const isDisabled = localStorageData?.some(
                    (booking) =>
                      booking.date === selectedDate &&
                      booking.seatNumbers.includes(number)
                  );

                  return (
                    <button
                      key={number}
                      disabled={isDisabled}
                      className={`btn ${
                        selectedNumbers.includes(number)
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => handleNumberSelect(number)}
                    >
                      {number}
                    </button>
                  );
                })}
              </div>

              <br />
              <br />
              <br />
              {row7.map((number) => {
                const isDisabled = localStorageData?.some(
                  (booking) =>
                    booking.date === selectedDate &&
                    booking.seatNumbers.includes(number)
                );

                return (
                  <button
                    key={number}
                    disabled={isDisabled}
                    className={`btn ${
                      selectedNumbers.includes(number)
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                    onClick={() => handleNumberSelect(number)}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
            <div className="col-2">
              {row8.map((number) => {
                const isDisabled = localStorageData?.some(
                  (booking) =>
                    booking.date === selectedDate &&
                    booking.seatNumbers.includes(number)
                );

                return (
                  <button
                    key={number}
                    style={{ marginBottom: "5px" }}
                    disabled={isDisabled}
                    className={`btn ${
                      selectedNumbers.includes(number)
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                    onClick={() => handleNumberSelect(number)}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Button variant="primary" onClick={handleButtonClick}>
          Book
        </Button>
        <ModalComponent
          show={showModal}
          handleClose={handleCloseModal}
          handleFormSubmit={handleFormSubmit}
        />
        <Button variant="warning" onClick={()=>setSelectedNumbers([])}>
          Reset
        </Button>
      </div>

      <br />
    </div>
  );
};

export default TicketBooking;
