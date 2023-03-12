import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, name, stock, category, img, price, permalink }) => {
  /* const img =
    "https://media.istockphoto.com/id/1182337590/photo/bogota-cityscape-of-big-buildings-and-mountains-and-blue-sky.jpg?s=612x612&w=0&k=20&c=4iGqcn_Ibf7lNI1YrIXnfXrzE3SVx0JyFFel8g6y1qQ=";
    */
  return (
    <>
      <Card
        style={{
          width: "18rem",
          height: "580px",
          float: "left",
          margin: "10px",
          display: "grid",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{ objectFit: "contain", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Category: {category}
            <br />
            Stock: {stock}
            <br />
            Price: {price}
          </Card.Text>
          <Button variant="info">
            <Link to={permalink}>Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
