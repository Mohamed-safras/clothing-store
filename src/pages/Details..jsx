import React, { Fragment, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import NotFound from "./NotFound";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const param = useLocation().pathname.split("/")[2];
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((product) => {
        const data = product[param];

        if (!data) return;

        setItem(data.find((item) => item.id === id));
      });
  }, [param, id]);

  return (
    <Fragment>
      {error ? (
        <NotFound />
      ) : (
        <div style={{ padding: "0 20px" }}>
          <h1>{item?.name}</h1>
          <div style={{ maxWidth: "500px", height: "400px" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={item?.image}
              alt={item?.name}
            />
          </div>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            {item?.sizes?.map((size) => (
              <li
                style={{
                  margin: "10px",
                  background: "black",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                key={size}
              >
                {size}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate(-1)}>back</button>
        </div>
      )}
    </Fragment>
  );
};

export default Details;
