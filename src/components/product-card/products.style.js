import styled from "styled-components";
import { colors } from "../../styles/colors/theme";
export const CardContainer = styled.div`
  // border-radius: 15px;
  max-height: 350px;
  position: relative;
  // margin: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 440px) {
    height: 340px;
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 75%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Rating = styled.div`
  position: absolute;

  bottom: 10px;
  left: 10px;
  padding: 2px 4px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fe5e02;
  span {
    font-size: 12px;
    color: $colorWhite;
    font-weight: 500;
    width: 100%;
    height: 100%;
    margin-right: 3px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardDetails = styled.div``;

export const CardHeader = styled.div`
  position: relative;
`;

export const ProductTitle = styled.p`
  width: 100%;

  font-size: 15px;
  padding: 0px 10px;
  font-weight: 500;
`;

export const AddToCard = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
`;

export const Brand = styled.p`
  color: ${colors.textColor};
  font-size: 14px;
  padding: 0px 10px;
`;

export const Sizes = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  color: ${colors.textColor};
  font-size: 14px;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
    li {
      margin-right: 5px;
    }
  }
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const Price = styled.div`
  .new_price {
    font-size: 14px;
    margin-right: 5px;
    color: $colorBlack;
  }
  .old_price {
    font-size: 11px;
    color: $text-color;
    margin-right: 5px;
    text-decoration: line-through;
  }

  .off {
    font-size: 11px;
    color: #fe5e02;
  }
`;
