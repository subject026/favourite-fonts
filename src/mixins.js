import { css } from "styled-components";

// variables

export const $nav_transition = "0.3s cubic-bezier(0.215, 0.61, 0.355, 1)";

// media queries

const buildMinWidthQueries = widths => {
  const queries = widths.reduce((acc, width) => {
    acc[`from${width}`] = styles => {
      return css`
        @media (min-width: ${width}) {
          ${styles}
        }
      `;
    };
    return acc;
  }, {});
  return queries;
};

export const width = buildMinWidthQueries(["600px", "730px"]);

//
