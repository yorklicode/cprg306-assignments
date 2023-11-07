'use client';
import React, { useState, useEffect } from 'react';


//const [message, setMessage] = useState("");

// Define the API fetching function outside the component
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  //if (!data.meals) {
   // setMessage("No meals found for the given ingredient.");
  //  return [];
//}
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  // Define the state variable to hold the list of meals
  const [meals, setMeals] = useState([]);

  // Define the load function inside the component
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  // Use the useEffect hook to call loadMealIdeas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Render the component
  return (
    <div>
      <h1>Meal Ideas for {ingredient}</h1>
      <ul>
        {meals && meals.map(meal => (
          <li key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
