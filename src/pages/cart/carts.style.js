import styled from "styled-components";
import { colors } from "../../styles/colors/theme";

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const OrderContainer = styled.div`
  /* display: flex; */
`;

export const DeliveryContainer = styled.div``;
