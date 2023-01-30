import styled from "styled-components";
import { colors } from "../../styles/colors/theme";
export const CartContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #e7e7e7;

  padding: 10px;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
`;

export const Image = styled.div`
  flex: 0.2;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductTitle = styled.div`
  flex: 0.8;
  margin: 0 10px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .title {
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
  }
  .brand {
    font-size: 13px;
    font-weight: 500;
    color: ${colors.textColor};
  }
`;

export const Price = styled.div`
  flex: 0.1;
`;

export const Size = styled.div`
  flex: 0.05;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 3px 0px;
  padding: 5px;
  font-size: 16px;
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;

  .add,
  .remove,
  .count {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 3px 0px;
    padding: 5px;
    font-size: 16px;
    min-width: 35px;
    min-height: 35px;
    max-width: 35px;
    max-height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add {
    background: ${colors.colorPrimary};
    color: ${colors.colorWhite};
    cursor: pointer;
  }

  .remove {
    background: ${colors.searchColor};
    width: 100%;
    cursor: pointer;
  }
`;

export const Remove = styled.div`
  flex: 0.05;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 3px 0px;
  padding: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  min-height: 35px;
  max-width: 35px;
  max-height: 35px;
  cursor: pointer;
`;
