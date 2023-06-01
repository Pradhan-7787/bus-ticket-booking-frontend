import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Dashboard from "../Screens/Dashboard";
import TicketBooking from "../Screens/TicketBooking";

export default function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<TicketBooking />} />
    </Routes>
  );
}
