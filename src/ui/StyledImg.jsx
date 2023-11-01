import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 500px;
  max-height: 400px;
  border-radius: 1em;
  box-shadow: 0 0 0 2px white, 0.14em 0.14em 0.33em rgba(200, 0, 0, 0.6);

  @media screen and (max-width: 1200px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;

export const HeadImg = styled.img`
  width: 500px;

  @media screen and (max-width: 1200px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
