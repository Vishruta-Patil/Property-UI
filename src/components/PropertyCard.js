const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img className="w-full h-48 object-cover" src={property.image} alt="Property" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{property.address}</h3>
      <p className="text-orange-500 text-lg font-bold">{property.price}</p>
      <div className="flex items-center justify-between text-gray-600 mt-2">
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a8 8 0 100-16 8 8 0 000 16zM8 6a2 2 0 114 0 2 2 0 01-4 0z" /><path d="M12 10H8a4 4 0 00-4 4v1h12v-1a4 4 0 00-4-4z" /></svg>
          {property.rooms}
        </span>
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a4 4 0 00-4 4H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2a4 4 0 00-4-4zm0 2a2 2 0 012 2H8a2 2 0 012-2zm-6 4h12v2h-2v-1a1 1 0 00-2 0v1H8v-1a1 1 0 00-2 0v1H4v-2zm0 4h2v2H4v-2zm4 0h4v2H8v-2zm6 0h2v2h-2v-2z" /></svg>
          {property.bathrooms}
        </span>
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm0-2h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4z" /></svg>
          {property.size}
        </span>
      </div>
    </div>
  </div>
);

export default PropertyCard;
