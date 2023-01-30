import styled from "styled-components";
import { colors } from "../../styles/colors/theme";
export const CartsContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 10px;
  }
`;

export const CartItems = styled.div`
  max-width: 1000px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: auto;
  background: ${colors.colorWhite};
  padding: 10px;
  width: 100%;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e7e7e7;
  padding: 10px;

  p {
    font-size: 15px;
    color: ${colors.textColor};
    font-weight: 500;
  }
  .description {
    flex: 0.5;
  }

  .size {
    flex: 0.05;
  }

  .quantity {
    flex: 0.3;
  }

  .remove {
    flex: 0.05;
  }

  .price {
    flex: 0.1;
  }
`;
