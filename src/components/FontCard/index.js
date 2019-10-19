import React from "react";
import { InView } from "react-intersection-observer";

import { StyledFontCard } from "../../styled-components";

const FontCard = ({ family, url, fontNotLoaded, handleCardInView }) => {
  console.log(fontNotLoaded);
  if (fontNotLoaded)
    return (
      <InView
        key={`${family}_card`}
        onChange={() => handleCardInView(url)}
        triggerOnce={true}
      >
        <StyledFontCard>
          <div style={{ fontFamily: family }}>{family}</div>
        </StyledFontCard>
      </InView>
    );
  return (
    <StyledFontCard>
      <div style={{ fontFamily: family }}>{family}</div>
    </StyledFontCard>
  );
};

export default FontCard;
