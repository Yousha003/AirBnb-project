import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

const AddAccommodation = () => {
  const [formData, setFormData] = useState({
    title: '',
    host: '',
    location: '',
    description: '',
    price: '',
    imageUrl: '',
    images: [],
  });
  const [additionalImage, setAdditionalImage] = useState('');
  const navigate = useNavigate();
  const user = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddImage = () => {
    if (additionalImage) {
      setFormData((prevData) => ({
        ...prevData,
        images: [...prevData.images, additionalImage],
      }));
      setAdditionalImage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/api/accommodations', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status === 201) {
        console.log('Accommodation added successfully');
        navigate('/');
      }
    } catch (error) {
      console.error('Error adding accommodation:', error);
    }
  };

  if (!user.token) {
    return (
      <div className="container mx-auto p-8 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-6">Lägg till boende</h1>
        <p className="text-lg text-gray-800 dark:text-gray-100">
          Du måste <Link to="/login" className="text-red-600 dark:text-red-400 hover:underline">logga in</Link> eller{' '}
          <Link to="/register" className="text-red-600 dark:text-red-400 hover:underline">registrera dig</Link> för att lägga till boende.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-6">Lägg till boende</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Titel"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
        />
        <input
          type="text"
          name="host"
          placeholder="Värd"
          value={formData.host}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
        />
        <input
          type="text"
          name="location"
          placeholder="Plats"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
        />
        <textarea
          name="description"
          placeholder="Beskrivning"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Pris per natt"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Huvudbild URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
        />
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Ytterligare bild URL"
            value={additionalImage}
            onChange={(e) => setAdditionalImage(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-red-600 dark:focus:border-red-400"
          />
          <button type="button" onClick={handleAddImage} className="bg-red-600 dark:bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-500">
            Lägg till bild
          </button>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {formData.images.map((image, index) => (
            <img key={index} src={image} alt={`Additional ${index + 1}`} className="w-32 h-32 object-cover rounded-lg" />
          ))}
        </div>
        <button type="submit" className="w-full bg-red-600 dark:bg-red-400 text-white p-3 rounded-lg hover:bg-red-700 dark:hover:bg-red-500">
          Lägg till boende
        </button>
      </form>
    </div>
  );
};

export default AddAccommodation;
