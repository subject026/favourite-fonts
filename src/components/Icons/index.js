import React from "react";
import styled from "styled-components";

const SVGStyled = styled.svg`
  path {
    fill: rgba(0, 0, 0, 0.6);
  }
`;

export const HouseIcon = () => {
  return (
    <SVGStyled xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </SVGStyled>
  );
};

export const StarIcon = () => {
  return (
    <SVGStyled xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </SVGStyled>
  );
};

export const NotepadIcon = () => {
  return (
    <SVGStyled xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </SVGStyled>
  );
};

export const InfoIcon = () => {
  return (
    <SVGStyled xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
    </SVGStyled>
  );
};
