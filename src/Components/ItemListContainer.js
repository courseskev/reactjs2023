import React, { useState, useEffect } from "react";

let initialProducts = [
  {
    id: 1,
    title: "Celular iPhone",
    description: "iPhone 13 pro max",
    price: 1999,
    pictureUrl: "url1",
  },
  {
    id: 2,
    title: "Tableta  iPad",
    description: "iPad pro 14pul",
    price: 2500,
    pictureUrl: "url2",
  },
  {
    id: 3,
    title: "Adifonos Airpods",
    description: "Airpods PRO with case fast charge",
    price: 799,
    pictureUrl: "url3",
  },
];

const ItemListContainer = ({ mensajeTitulo }) => {
  return (
    <>
      <h1> {mensajeTitulo} </h1> <br />
    </>
  );
};

export default ItemListContainer;

/*
 
*/
