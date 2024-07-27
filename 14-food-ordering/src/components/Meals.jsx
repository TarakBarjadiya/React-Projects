export default function Meals() {
    return (
        <ul id="meals">
            <li className="meal-item">
                <article>
                    <img src="" alt="" />
                    <div>
                        <h3>title</h3>
                        <p className="meal-item-price">8.99</p>
                        <p className="meal-item-description">description</p>
                    </div>
                    <p>
                        <button className="button">Add to Cart</button>
                    </p>
                </article>
            </li>
        </ul>
    );
}
