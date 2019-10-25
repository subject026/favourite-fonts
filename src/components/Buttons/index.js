import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  ${props => (props.type === "reset" ? "transform: translateX(10px);" : "")}
  path {
    fill: rgba(0, 0, 0, 0.54);
    transition: fill 0.1s linear;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: rgba(0, 0, 0, 0.74);
    }
  }
`;

export const ResetButton = ({ handleOptionsReset }) => {
  return (
    <Button type="reset" onClick={handleOptionsReset}>
      <svg width="24" height="24">
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </Button>
  );
};

export const AddButton = () => {
  return (
    <Button>
      <svg width="24" height="24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm11 1h4v-2h-4V7h-2v4H7v2h4v4h2v-4z"
        />
      </svg>
    </Button>
  );
};
