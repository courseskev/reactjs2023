import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Card, Button } from "react-bootstrap";
import { Fragment } from "react";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const productFilter = products.filter((product) => product.id === id);
  return (
    <Fragment>
      {productFilter.map((product) => (
        <div key={product.id}>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.pictureUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Description: {product.description}
                  Category: {product.category}
                  Stock: {product.stock}
                </Card.Text>

                <ItemCount stock={product.stock} />
                <Button variant="info">Buy</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ItemDetail;
