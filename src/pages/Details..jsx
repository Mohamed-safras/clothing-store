import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { pathname } = useLocation();
  const paramId = pathname.split("/")[3];

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/categories/${paramId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [paramId]);

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{data.title}</h1>
      <div style={{ maxWidth: "500px", height: "400px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={data.imageUrl}
          alt="ds"
        />
      </div>
    </div>
  );
};

export default Details;
