import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
`;

const SearchIcon = () => {
  return (
    <IconContainer>
      <svg width="24" height="24" fill="none">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.71 14h.79l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28C12.59 15.41 11.11 16 9.5 16 5.91 16 3 13.09 3 9.5S5.91 3 9.5 3 16 5.91 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zM5 9.5C5 11.99 7.01 14 9.5 14S14 11.99 14 9.5 11.99 5 9.5 5 5 7.01 5 9.5z"
          fill="#000"
          fillOpacity=".54"
        />
      </svg>
    </IconContainer>
  );
};

export default SearchIcon;
