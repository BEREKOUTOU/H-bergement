// src/components/Accommodations.jsx
import React from 'react';

function Accommodations() {
  const rooms = [
    {
      title: "Suite vue mer",
      description: "Suite luxueuse avec vue panoramique sur la mer",
      price: "$350",
      image: "/assets/rooms/ocean-view-suite.png"
    },
    {
      title: "Villa plage",
      description: "Villa privée à proximité de la plage",
      price: "$500",
      image: "/assets/rooms/beach-villa.png"
    },
    {
      title: "Suite famille",
      description: "Suite pour toute la famille",
      price: "$450",
      image: "/assets/rooms/family-suite-new.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-white" id="accommodations">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nos logements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">De {room.price}/nuit</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accommodations;