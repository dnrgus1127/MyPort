import useBoolean from "hooks/useBoolean";
import { useMemo } from "react";
import styled from "styled-components";

const ImageWarpper = styled.img`
  cursor: pointer;
  &.full-screen {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    z-index: 80;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #00000088;

    img {
      box-shadow: none;

      max-height: 70%;
      max-width: none;
      object-fit: cover;
    }
  }
`;

export default function CustomIMG({ src, alt = "img" }: { src?: string; alt?: string }) {
  const [isFullScreen, onToggleIsFullScreen] = useBoolean(false);

  const processedStr = useMemo(() => {
    if (src) {
      return src.replaceAll(/(&amp;)/g, "&");
    }
  }, [src]);

  if (isFullScreen)
    return (
      <ImageWarpper as="div" onClick={onToggleIsFullScreen} className="full-screen">
        <img src={processedStr} alt={alt} />
      </ImageWarpper>
    );

  return <ImageWarpper onClick={onToggleIsFullScreen} src={processedStr} alt={alt} />;
}
