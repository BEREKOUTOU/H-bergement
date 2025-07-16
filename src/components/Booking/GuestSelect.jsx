// src/components/booking/GuestSelect.jsx
import React from 'react';

function GuestSelect({ bookingData, setBookingData }) {
  const handleGuestChange = (type, value) => {
    setBookingData(prev => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, value)
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Nombre de personnes</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Adultes</label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => handleGuestChange('adults', bookingData.adults - 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-12 text-center">{bookingData.adults}</span>
            <button
              type="button"
              onClick={() => handleGuestChange('adults', bookingData.adults + 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Enfants</label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => handleGuestChange('children', bookingData.children - 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-12 text-center">{bookingData.children}</span>
            <button
              type="button"
              onClick={() => handleGuestChange('children', bookingData.children + 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestSelect;