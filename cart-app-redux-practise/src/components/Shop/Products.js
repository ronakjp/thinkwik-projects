import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "First Book",
    description: " First best book written by RJ",
  },
  {
    id: "p2",
    price: 10,
    title: "Second Book",
    description: " So so Second book written by RJ",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((each) => (
          <ProductItem
            key={each.id}
            title={each.title}
            price={each.price}
            description={each.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
