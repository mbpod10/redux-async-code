import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const itemsArray = [
    { id: 1, title: 'Nerf Gun', quantity: 0, total: 0, price: 6 },
    { id: 2, title: 'Keyboard', quantity: 0, total: 0, price: 15 },
  ].map((item, index) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description='This is a first product - amazing!'
      />
    )
  })

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemsArray}
      </ul>
    </section>
  );
};

export default Products;
