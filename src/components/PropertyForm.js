const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    unitNumber: '',
    city: '',
    roomType: '',
    price: '',
    description: '',
    photos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Form data:', formData);
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">Add A New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-gray-700">Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Unit Number<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="unitNumber"
              value={formData.unitNumber}
              onChange={handleChange}
              placeholder="Enter Unit"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">City<span className="text-red-500">*</span></label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Room Type<span className="text-red-500">*</span></label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedroom">2 Bedroom</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Price<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md h-32"
          ></textarea>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700">Upload Photos</label>
          <div className="mt-1 p-6 border-2 border-dashed border-gray-300 rounded-md">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="block w-full text-gray-700"
              accept=".jpg, .jpeg, .png"
            />
            <p className="text-sm text-gray-500 mt-2">Drag your images here, or <span className="text-orange-600 cursor-pointer">browse</span></p>
            <p className="text-sm text-gray-500">Supported: JPG, JPEG, PNG</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-4 rounded-md font-bold hover:bg-orange-700 transition duration-300"
        >
          Add New Property
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
