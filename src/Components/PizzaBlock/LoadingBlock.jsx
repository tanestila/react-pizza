import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="110" />
    <rect x="51" y="428" rx="0" ry="0" width="1" height="1" />
    <rect x="2" y="270" rx="0" ry="0" width="280" height="30" />
    <rect x="248" y="324" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="405" rx="0" ry="0" width="50" height="30" />
    <rect x="3" y="310" rx="0" ry="0" width="280" height="80" />
    <rect x="230" y="405" rx="0" ry="0" width="50" height="30" />
  </ContentLoader>
);

export default LoadingBlock;
