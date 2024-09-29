import { useEffect, useState } from 'react';
import MealItem from './MealItem';
import { fetchMeals } from '../http-requests.js';

export default function Meals() {
    const [isLoading, setIsLoading] = useState(false);
    const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const mealsData = await fetchMeals();
            setMealsData(mealsData);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            {isLoading && <p className='loading-state'>Loading your menu...</p>}
            <ul id="meals">{!isLoading && mealsData.map((meal) => <MealItem key={meal.id} meal={meal} />)}</ul>
        </>
    );
}
