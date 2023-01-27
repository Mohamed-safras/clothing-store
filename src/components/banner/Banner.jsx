import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors/index";

const Banner = ({ src }) => {
  return <Image src={src} />;
};

export default Banner;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.src})`};
  background-size: 100% 100%;
  background-color: ${colors.colorBlack};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  background-position: center;
`;
