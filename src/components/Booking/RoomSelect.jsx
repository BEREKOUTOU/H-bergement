// src/components/booking/RoomSelect.jsx
import React from 'react';

function RoomSelect({ bookingData, setBookingData }) {
  const rooms = [
    {
      id: 'oceanview',
      name: 'Suite vue mer',
      price: '$299',
      description: 'Suite avec vue panoramique sur la mer'
    },
    {
      id: 'beachfront',
      name: 'Villa plage',
      price: '$499',
      description: 'Villa privée à proximité de la plage'
    },
    {
      id: 'garden',
      name: 'Suite famille',
      price: '$199',
      description: 'Suite pour toute la famille'
    }
  ];

  const handleRoomChange = (roomId) => {
    setBookingData(prev => ({
      ...prev,
      roomType: roomId
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Type de chambre</h3>
      <div className="space-y-3">
        {rooms.map((room) => (
          <label
            key={room.id}
            className={`block p-4 border rounded-lg cursor-pointer transition-all ${
              bookingData.roomType === room.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <input
              type="radio"
              name="roomType"
              value={room.id}
              checked={bookingData.roomType === room.id}
              onChange={() => handleRoomChange(room.id)}
              className="sr-only"
            />
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-900">{room.name}</div>
                <div className="text-sm text-gray-500">{room.description}</div>
              </div>
              <div className="text-blue-600 font-semibold">{room.price}/nuit</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RoomSelect;