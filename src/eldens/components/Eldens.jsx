import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EldenService from "../service/EldenService";
import EldenList from "./EldenList";

const eldenService = new EldenService();

const Eldens = () => {
  const [data, setData] = useState([]);

  const getEldens = async () => {
    const eldens = await eldenService.getEldens();
    // setData(await eldenService.getEldens());
console.log(eldens.data.data);
    setData(
      await Promise.all(
        eldens.map((elden) =>
          eldenService.getEldenWithReturnedUrl(elden.url)
      
        )
      )
    );
  };

  useEffect(() => {
    getEldens();
  }, []);

  return <EldenList eldens={data} />;
};

export default Eldens;
