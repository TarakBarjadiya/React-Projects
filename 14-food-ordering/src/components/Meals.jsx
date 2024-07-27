import { useEffect, useState } from 'react';
import MealItem from './MealItem';

export default function Meals() {
    const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');
            const mealsData = await response.json();

            if (!response.ok) {
                console.log('failed to fetch meals data');
            }
            setMealsData(mealsData);
        }
        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {mealsData.map((meal) => (
                <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>
    );
}
