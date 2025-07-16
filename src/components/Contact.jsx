// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Localisation</h3>
              <p className="text-gray-600">
                123 Oceanview Drive<br />
                Coastal City, CC 12345<br />
                United States
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Informations de contact</h3>
              <p className="text-gray-600 mb-2">Téléphone: +1 (555) 123-4567</p>
              <p className="text-gray-600 mb-2">Email: info@beachhouse.com</p>
              <p className="text-gray-600">
              Arrivée : 15h00<br />
              Départ : 11h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;