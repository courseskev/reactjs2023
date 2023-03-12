import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../Data.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setproducts] = useState([]);

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const bikeFilter = Data.filter((bike) => bike.id === id);
        resolve(bikeFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setproducts(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
