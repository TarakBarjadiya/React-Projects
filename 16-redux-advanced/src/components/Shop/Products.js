import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Hoolaboo',
    price: 10,
    description: 'This is hoolabooo!!',
  },
  {
    id: 'p2',
    title: 'Hehe : Part 2',
    price: 7,
    description: 'Hehe :) What do you think?? ;)',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
