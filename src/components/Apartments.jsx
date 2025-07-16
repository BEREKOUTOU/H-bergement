// src/components/Apartments.jsx
import React, { useState, useEffect } from 'react';

function Apartments() {
  const [guestCount, setGuestCount] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const roomTypes = [
    {
      id: 1,
      title: "Chambre King Supérieure",
      location: "Front de la plage",
      description: "Experience luxury with stunning ocean views",
      image: "/assets/rooms/superior-king.png",
      price: 299,
      area: {
        total: 45,
        bedroom: 28,
        bathroom: 8,
        balcony: 9
      },
      maxGuests: 2,
      bedConfiguration: "1 lit king size",
      facilities: [
        { name: "Vue panoramique", icon: "🌊" },
        { name: "Terrasse privée", icon: "🏖️" },
        { name: "Climatisation", icon: "❄️" },
        { name: "Wi-Fi gratuit", icon: "📶" },
        { name: "Mini Bar", icon: "🍷" },
        { name: "Service chambre", icon: "🍽️" },
        { name: "Smart TV", icon: "📺" },
        { name: "Sécurité", icon: "🔒" }
      ]
    },
    {
      id: 2,
      title: "Chambre Twin Deluxe",
      location: "Vue jardin",
      description: "Parfait pour amis ou voyageurs affaires",
      image: "/assets/rooms/deluxe-twin.png",
      price: 259,
      area: {
        total: 40,
        bedroom: 26,
        bathroom: 8,
        balcony: 6
      },
      maxGuests: 2,
      bedConfiguration: "2 lits jumeaux",
      facilities: [
        { name: "Vue jardin", icon: "🌳" },
        { name: "Climatisation", icon: "❄️" },
        { name: "Wi-Fi gratuit", icon: "📶" },
        { name: "Zone de travail", icon: "💻" },
        { name: "Mini Fridge", icon: "❄️" },
        { name: "Smart TV", icon: "📺" },
        { name: "Sécurité", icon: "🔒" }
      ]
    },
    {
      id: 3,
      title: "Suite Famille",
      location: "Vue ocean",
      description: "Suite spacieuse idéale pour les familles",
      image: "/assets/rooms/family-suite.png",
      price: 499,
      area: {
        total: 75,
        bedrooms: 45,
        livingRoom: 20,
        bathroom: 10
      },
      maxGuests: 4,
      bedConfiguration: "1 lit king size + 2 lits jumeaux",
      facilities: [
        { name: "Vue partielle sur l'océan", icon: "🌊" },
        { name: "Salle à manger", icon: "🛋️" },
        { name: "Cuisine complète", icon: "🍳" },
        { name: "Climatisation", icon: "❄️" },
        { name: "Wi-Fi gratuit", icon: "📶" },
        { name: "2 Smart TVs", icon: "📺" },
        { name: "Mini Bar", icon: "🍷" },
        { name: "Sécurité", icon: "🔒" }
      ]
    },
    {
      id: 4,
      title: "Suite Executive",
      location: "Front de la plage",
      description: "Premium suite avec vue panoramique sur l'océan",
      image: "/assets/rooms/executive-suite.png",
      price: 599,
      area: {
        total: 85,
        bedroom: 35,
        livingRoom: 30,
        bathroom: 12,
        balcony: 8
      },
      maxGuests: 2,
      bedConfiguration: "1 lit king size",
      facilities: [
        { name: "Vue panoramique", icon: "🌅" },
        { name: "Terrasse privée", icon: "🏖️" },
        { name: "Salle à manger", icon: "🛋️" },
        { name: "Zone de travail", icon: "💻" },
        { name: "Mini Bar", icon: "🍷" },
        { name: "Machine espresso", icon: "☕" },
        { name: "Smart TV", icon: "📺" },
        { name: "Sécurité", icon: "🔒" }
      ]
    },
    {
      id: 5,
      title: "  Appartement à deux chambres",
      location: "Garden Wing",
      description: "Parfait pour les séjours prolongés et les familles",
      image: "/assets/rooms/two-bedroom.png",
      price: 699,
      area: {
        total: 95,
        bedrooms: 50,
        livingRoom: 25,
        kitchen: 12,
        bathroom: 8
      },
      maxGuests: 5,
      bedConfiguration: "1 lit king size + 2 lits jumeaux",
      facilities: [
        { name: "Cuisine complète", icon: "🍳" },
        { name: "Salle à manger", icon: "🍽️" },
        { name: "Lave-linge", icon: "👕" },
        { name: "2 Salle de bain", icon: "🚿" },
        { name: "Climatisation", icon: "❄️" },
        { name: "Wi-Fi gratuit", icon: "📶" },
        { name: "3 Smart TVs", icon: "📺" }
      ]
    },
    {
      id: 6,
      title: "Suite Penthouse",
      location: "Top Floor",
      description: "Ultimate luxury with spectacular views",
      image: "/assets/rooms/penthouse.png",
      price: 999,
      area: {
        total: 150,
        bedrooms: 60,
        livingRoom: 45,
        kitchen: 20,
        bathrooms: 25
      },
      maxGuests: 6,
      bedConfiguration: "2 lits king size + 2 lits jumeaux",
      facilities: [
        { name: "360° Vues", icon: "🌅" },
        { name: "Terrasse privée", icon: "🏖️" },
        { name: "Cuisine complète", icon: "🍳" },
        { name: "Salle à manger", icon: "🍽️" },
        { name: "Bar privé", icon: "🍷" },
        { name: "Jacuzzi", icon: "🛁" },
        { name: "Service Butler", icon: "👨‍💼" },
        { name: "Wi-Fi Premium", icon: "📶" }
      ]
    }
  ];

  useEffect(() => {
    filterRooms();
  }, [guestCount, priceRange]);

  const filterRooms = () => {
    const filtered = roomTypes.filter(room => 
      room.maxGuests >= guestCount &&
      room.price >= priceRange[0] &&
      room.price <= priceRange[1]
    );
    setFilteredRooms(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(Public/assets/images/Format-Rectangle-HDP.JPEG)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos logements
            </h1>
            <p className="text-lg text-white">
              Trouvez votre séjour parfait avec notre gamme de chambres et suites luxueuses
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-md py-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="flex items-center space-x-3">
              <label className="font-medium">Nombre de personnes:</label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="border rounded-md px-3 py-2"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <label className="font-medium">Prix:</label>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-48"
              />
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room Listings */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-80 relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-semibold">{room.title}</h3>
                      <p className="text-xl font-bold text-blue-600">${room.price}/nuit</p>
                    </div>
                    <p className="text-gray-600 mt-1">{room.location}</p>
                    <p className="text-gray-700 mt-2">{room.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Détails</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>Max Guests: {room.maxGuests}</div>
                      <div>Beds: {room.bedConfiguration}</div>
                      {Object.entries(room.area).map(([key, value]) => (
                        <div key={key} className="capitalize">
                          {key}: {value}m²
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <span>{facility.icon}</span>
                          <span>{facility.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Aucun logement disponible pour les critères sélectionnés.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Apartments;