export async function fetchMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const mealsData = await response.json();

    if (!response.ok) {
        console.log('failed to fetch meals data');
    }
    return mealsData;
}