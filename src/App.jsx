import { useState } from 'react'

function App() {

  const ingredients = [
    { ingredient: 'penne rigate', measure: '1 pound' }
  ];

  const renderList = (item) => (
    <div className="flex text-sm">
      <li>{item.ingredient} - </li>
      <span className="italic text-gray-500">{item.measure}</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button
        className="bg-gray-800 text-white px-4 py-2 w-full rounded-md md:w-40">
        Get new meal
      </button>
      <h1 className="text-4xl font-bold mt-6 underline">Title</h1>
      <div>
        <div className="mt-4 border-orange-500 border-4 rounded-md h-80">
          <img className="w-full h-full object-cover" src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="image"/>
        </div>
        <div className="my-6">
          <h3 className="text-4xl font-bold mb-2">Ingredients</h3>
          {ingredients.map((item, index) => renderList(item, index))}
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2">Instructions</h3>
          <p>Here go the instructions</p>
        </div>
      </div>
    </div>
  );
}

export default App;
