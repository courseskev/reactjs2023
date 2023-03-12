import Item from "./Item";
import Container from "react-bootstrap/Container";
import { Fragment } from "react";

const ItemList = ({ products }) => {
  return (
    <Fragment>
      <Container>
        {products?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            stock={product.order_backend}
            category={product.domain_id}
            img={product.thumbnail}
            permalink={product.permalink}
          />
        ))}
      </Container>
    </Fragment>
  );
};

export default ItemList;
