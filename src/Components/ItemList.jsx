import Item from "./Item";
import Container from "react-bootstrap/Container";
const ItemList = ({ products }) => {
  return (
    <>
      <Container>
        {products?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            category={product.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
