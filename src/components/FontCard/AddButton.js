import React from "react";

const AddButton = () => {
  return (
    <button>
      <svg width="24" height="24" fill="none">
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm11 1h4v-2h-4V7h-2v4H7v2h4v4h2v-4z"
          fill="#000"
          fillOpacity=".54"
        />
      </svg>
    </button>
  );
};

export default AddButton;
