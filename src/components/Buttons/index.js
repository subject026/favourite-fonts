import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  ${props =>
    props.type === "optionsBar" ? "transform: translateX(10px);" : ""}
  path {
    fill: ${props =>
      props.type === "add"
        ? `${props.theme.colors.lightRed}`
        : "rgba(0, 0, 0, 0.54)"};
    transition: fill 0.1s linear;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: ${props =>
        props.type === "add"
          ? `${props.theme.colors.red}`
          : "rgba(0, 0, 0, 0.74)"};
    }
  }
`;

const BackToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: background-color 0.1s linear, transform 0.3s linear;
  path {
    fill: rgba(0, 0, 0, 0.54);
  }
  ${props =>
    props.windowAtTop
      ? `transform: translateY(200px)`
      : `transform: translateY(0)`};
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

// Options Bar Buttons
//

export const ResetButton = ({ handleOptionsReset }) => {
  return (
    <Button type="optionsBar" onClick={handleOptionsReset}>
      <svg width="24" height="24">
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      </svg>
    </Button>
  );
};

export const ViewToggleButton = ({ handleViewToggle, isListView }) => {
  return (
    <Button type="optionsBar" onClick={handleViewToggle}>
      {isListView && (
        <svg width="24" height="24">
          <path d="M4 5v13h17V5H4zm10 2v3.5h-3V7h3zM6 7h3v3.5H6V7zm0 9v-3.5h3V16H6zm5 0v-3.5h3V16h-3zm8 0h-3v-3.5h3V16zm-3-5.5V7h3v3.5h-3z" />
        </svg>
      )}
      {!isListView && (
        <svg width="24" height="24">
          <path d="M3 5v14h17V5H3zm4 2v2H5V7h2zm-2 6v-2h2v2H5zm0 2h2v2H5v-2zm13 2H9v-2h9v2zm0-4H9v-2h9v2zm0-4H9V7h9v2z" />
        </svg>
      )}
    </Button>
  );
};

export const AddButton = () => {
  return (
    <Button type="add">
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

export const BackToTopButton = ({ windowAtTop, handleBackToTopClick }) => (
  <BackToTopButtonStyled
    windowAtTop={windowAtTop}
    onClick={handleBackToTopClick}
  >
    <svg width="24" height="24">
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  </BackToTopButtonStyled>
);
