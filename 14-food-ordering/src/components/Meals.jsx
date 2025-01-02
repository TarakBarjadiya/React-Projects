import { useEffect, useState } from 'react';
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeal() {
      const response = await fetch('http://localhost:3000/meals');
      if (!response.ok) {
        console.log('Error');
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeal();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
