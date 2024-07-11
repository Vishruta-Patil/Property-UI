import React from 'react';
import { useForm } from 'react-hook-form';

const PropertyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">Add A New Property</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-gray-700">Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Enter Name"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Address<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Enter Address"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p className="text-red-500 mt-1">{errors.address.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Unit Number<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Enter Unit"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              {...register('unitNumber', { required: 'Unit Number is required' })}
            />
            {errors.unitNumber && <p className="text-red-500 mt-1">{errors.unitNumber.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">City<span className="text-red-500">*</span></label>
            <select
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              {...register('city', { required: 'City is required' })}
            >
              <option value="">Select</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
            {errors.city && <p className="text-red-500 mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Room Type<span className="text-red-500">*</span></label>
            <select
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              {...register('roomType', { required: 'Room Type is required' })}
            >
              <option value="">Select</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedroom">2 Bedroom</option>
            </select>
            {errors.roomType && <p className="text-red-500 mt-1">{errors.roomType.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Price<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Enter Price"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
              {...register('price', { required: 'Price is required' })}
            />
            {errors.price && <p className="text-red-500 mt-1">{errors.price.message}</p>}
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700">Description</label>
          <textarea
            placeholder="Enter Description"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md h-32"
            {...register('description')}
          ></textarea>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700">Upload Photos</label>
          <div className="mt-1 p-6 border-2 border-dashed border-gray-300 rounded-md">
            <input
              type="file"
              multiple
              className="block w-full text-gray-700"
              accept=".jpg, .jpeg, .png"
              {...register('photos')}
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
