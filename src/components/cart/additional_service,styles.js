import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-height: 400px;
  @media screen and (max-width: 768px) {
    max-height: 100%;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 450px) {
    max-height: 100%;
    grid-template-columns: 1fr;
  }
`;

export const ServicePackage = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 4px 0px;
`;

export const PackagePrice = styled.div``;
export const PackageType = styled.div`
  span {
    display: block;
    font-size: 14px;
  }
`;

export const ServiceEnabalButton = styled.div``;
