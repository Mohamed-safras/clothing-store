import styled from "styled-components";
import { colors } from "../../styles/colors/index";
export const DeliverContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  max-height: 210px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    max-height: 100%;
  }
`;
export const CheckMark = styled.div``;
export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 120px;
  border-radius: 10px;
  border: 1px solid ${colors.colorLightBlue};
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const DeliverDetails = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: flex-start;
  align-items: center;
  .logo {
    margin-right: 10px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .title_and_expected_delivery {
    margin-right: 10px;
    p {
      font-size: 16px;
      font-weight: 500;
    }

    span {
      font-size: 14px;
      font-weight: 500;
      color: ${colors.textColor};
    }
  }

  .delivery_charge {
    font-size: 18px;
    font-weight: 500;
    color: ${colors.textColor};
  }
`;
