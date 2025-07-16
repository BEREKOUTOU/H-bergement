// src/components/booking/DatePicker.jsx
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DatePicker({ bookingData, setBookingData }) {
  const handleCheckInChange = (date) => {
    setBookingData(prev => ({
      ...prev,
      checkIn: date
    }));
  };

  const handleCheckOutChange = (date) => {
    setBookingData(prev => ({
      ...prev,
      checkOut: date
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Dates</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Arrivée</label>
          <ReactDatePicker
            selected={bookingData.checkIn}
            onChange={handleCheckInChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            minDate={new Date()}
            placeholderText="Arrivée"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Départ</label>
          <ReactDatePicker
            selected={bookingData.checkOut}
            onChange={handleCheckOutChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            minDate={bookingData.checkIn || new Date()}
            placeholderText="Départ"
          />
        </div>
      </div>
    </div>
  );
}

export default DatePicker;