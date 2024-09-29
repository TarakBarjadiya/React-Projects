//dollers to inr and round to nearest 50s

function roundToNearest50(num) {
    return Math.round(num / 50) * 50;
}

const dollarToInr = (mealPrice) => {
    const priceInInr = mealPrice * 83;
    return roundToNearest50(priceInInr);
};

const roundedPrice = dollarToInr(meal.price);
