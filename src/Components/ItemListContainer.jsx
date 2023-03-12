import React, { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Data from "../Data.json";
import { Fragment, useState, useEffect } from "react";

const ItemListContainer = () => {
  const { domain_id } = useParams();

  const [headphones, setHeadphones] = useState([]);
  const [computers, setComputers] = useState([]);
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=notebook&limit=10")
      .then((res) => res.json())
      .then((data) => setComputers(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.mercadolibre.com/sites/MCO/search?q=smartphones&limit=10"
    )
      .then((res) => res.json())
      .then((data) => setSmartphones(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=headphones&limit=10")
      .then((res) => res.json())
      .then((data) => setHeadphones(data.results))
      .catch((err) => console.error(err));
  }, []);

  const fullData = [...headphones, ...computers, ...smartphones];

  console.log(fullData);

  const catFilter = fullData.filter(
    (product) => product.domain_id === domain_id
  );

  return (
    <Fragment>
      <div>
        <h2>Products by Category</h2>
      </div>
      {domain_id ? (
        <ItemList products={catFilter} />
      ) : (
        <ItemList products={fullData} />
      )}
    </Fragment>
  );
};

export default ItemListContainer;

/*
 
*/
