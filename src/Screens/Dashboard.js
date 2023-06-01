import React, { useEffect, useState } from "react";
import "./BusTicketBooking.css";
import BookingDetailsModal from "../Components/BookingDetailsModal";
import EditModal from "../Components/EditBookingDetailsModal";

const Dashboard = () => {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [editData, setEditData] = useState(null);

  const handleView = (index) => {
    setSelectedData(localStorageData[index]);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    localStorageData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(localStorageData));
    fetchData();
  };

  const handleEdit = (index) => {
    setEditData(localStorageData[index]);
    setShowEditModal(true);
  };

  const handleSaveData = (updatedData) => {
    const updatedLocalStorageData = localStorageData?.map((item) => {
      if (item.email === updatedData.email && item.date === updatedData.date) {
        return updatedData;
      }
      return item;
    });
    localStorage.setItem("formData", JSON.stringify(updatedLocalStorageData));
    setShowEditModal(false);
    fetchData();
  };

  const handleClose = () => {
    setShowModal(false);
    setShowEditModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let allData = await localStorage.getItem("formData");
    setLocalStorageData(JSON.parse(allData));
  };
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {localStorageData[0] ? (
        <div>
          {localStorageData?.map((item, index) => (
            <div
              className="bar"
              key={index}
              style={{
                marginBottom: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>{item.name}</span>
              <div style={{ alignItems: "end" }}>
                <button
                  className="btn btn-primary view-button"
                  onClick={() => handleView(index)}
                >
                  View
                </button>

                <button
                  className="btn btn-warning view-button"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger view-button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No Data Available</div>
      )}
      {showModal && (
        <BookingDetailsModal data={selectedData} onClose={handleClose} />
      )}
      {showEditModal && (
        <EditModal
          show={showModal}
          handleClose={handleClose}
          data={editData}
          onSave={handleSaveData}
        />
      )}
    </div>
  );
};
export default Dashboard;
