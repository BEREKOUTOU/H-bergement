// src/components/Booking.jsx
import React, { useState } from 'react';
import DatePicker from './Booking/DatePicker';
import RoomSelect from './Booking/RoomSelect';
import GuestSelect from './Booking/GuestSelect';
import BookingForm from './Booking/BookingForm';

function Booking() {
  const [bookingData, setBookingData] = useState({
    checkIn: null,
    checkOut: null,
    roomType: '',
    adults: 1,
    children: 0,
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[600px]">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-20">Réservez votre séjour</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DatePicker
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
            <RoomSelect
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
            <GuestSelect
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          </div>
          <BookingForm
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Réserver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;