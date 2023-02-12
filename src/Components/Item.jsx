import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, title, stock, description, category, pictureUrl }) => {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Category: {category}
              Stock: {stock}
            </Card.Text>
            <Button variant="info">
              <Link to={`/item/${id}`}>Details</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Item;
