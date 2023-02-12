import React, { useState, useEffect, useParams } from "react";
import ItemList from "./ItemList";
import Data from "../Data.json";
import { Heading, Center } from "react-bootstrap";

const ItemListContainer = () => {
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = Data.filter((product) => product.category === category);

  return (
    <>
      <div bg="#D6EAF8" h="100px" color="black">
        <h2>Products by Category</h2>
      </div>
      {category ? (
        <ItemList products={catFilter} />
      ) : (
        <ItemList products={Data} />
      )}
    </>
  );
};

export default ItemListContainer;

/*
 
*/
