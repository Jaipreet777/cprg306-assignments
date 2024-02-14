"use client"
import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);

    alert('name: ${name}\nquantity: ${quantity}\ncategory: ${category}');

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg shadow-lg max-w-md mx-auto my-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="quantity" className="block text-white text-sm font-bold mb-2">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="category" className="block text-white text-sm font-bold mb-2">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white">
          {/* Options */}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default NewItem;