import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Banner from "./Banner";
const bannerdata = [
  {
    id: 1,
    src: "https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148582752.jpg?w=1060&t=st=1674715126~exp=1674715726~hmac=41b928b44f401529acf144afe8be11c6d3888b3d77d567592078e070c9a567f8",
  },
  {
    id: 2,
    src: "https://img.freepik.com/premium-psd/online-shopping-concept-banner-template_23-2148559462.jpg?w=1060",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-psd/banner-template-with-online-shopping_23-2148545455.jpg?w=1060&t=st=1674715172~exp=1674715772~hmac=0f1fcb684b2de0929635a3f14f9f0e02c487bc074ead38149653b1ae4da197bb",
  },
];

const Banners = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(() => counter + 1);
    if (counter === bannerdata.length - 1) {
      setCounter(0);
    }
  };

  const decrement = () => {
    setCounter(() => counter - 1);
    if (counter === 0) {
      setCounter(bannerdata.length - 1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(() => counter + 1);
      if (counter === bannerdata.length - 1) {
        setCounter(0);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <BannersContainer>
      <GoLeft>
        <IconButton onClick={decrement}>
          <ChevronLeftIcon sx={{ fontSize: 50, color: "#a1a0a5" }} />
        </IconButton>
      </GoLeft>

      {bannerdata.map(
        (item, index) =>
          counter === index && <Banner key={item.id} src={item.src} />
      )}

      <GoRight>
        <IconButton onClick={increment}>
          <ChevronRightIcon sx={{ fontSize: 50, color: "#a1a0a5" }} />
        </IconButton>
      </GoRight>
    </BannersContainer>
  );
};

export default Banners;

const BannersContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 15px;

  @media screen and (max-width: 678px) {
    height: 250px;
  }
`;

const GoRight = styled.div`
  position: absolute;
  right: 15px;
`;

const GoLeft = styled.div`
  position: absolute;
  left: 15px;
`;
