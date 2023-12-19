import styled from "styled-components";
import { Floating } from "styles/keyFrame/floating";
import media from "styles/media";

const SpinPlanetLayout = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 var(--header);
`;
const Planet = styled.div`
  width: calc(var(--width) / 10);
  padding-bottom: calc(var(--width) / 10);
  background-color: #f1d625;
  background-color: #256cf1;
  background-color: #f19225;
  filter: blur(3px) grayscale(0.5);
  border-radius: 50%;
  box-shadow: -15px -16px 15px 15px rgba(0, 0, 0, 0.7) inset, 15px 16px 15px 15px rgba(255, 255, 255, 0.3) inset,
    0px 0px 30px rgba(255, 255, 255, 0.24);
  position: relative;
  overflow: hidden;
  animation: ${() => Floating(5)} 3s ease-in-out infinite;

  .crater {
    position: absolute;
    width: 10%;
    padding-bottom: 10%;
    border-radius: 50%;
    box-shadow: inset 3px 3px 3px 1px rgba(0, 0, 0, 0.7);
  }
  .crater:nth-child(1) {
    top: 25%;
    left: 25%;
  }
  .crater:nth-child(2) {
    width: 25%;
    padding-bottom: 25%;
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: inset 4px 4px 5px 2px rgba(0, 0, 0, 0.5);
  }
  .crater:nth-child(3) {
    right: 3%;
    top: 7%;
    width: 20%;
    padding-bottom: 20%;
    box-shadow: inset 5px 5px 5px 2px rgba(0, 0, 0, 0.4);
  }
  .crater:nth-child(4) {
    left: 3%;
    bottom: 7%;
    width: 20%;
    padding-bottom: 20%;
    box-shadow: inset 5px 5px 5px 2px rgba(0, 0, 0, 0.4);
  }
  ${media.medium} {
    width: calc(var(--width) / 3);
    padding-bottom: calc(var(--width) / 3);
  }

  ${media.small} {
    width: calc(var(--width) / 3);
    padding-bottom: calc(var(--width) / 3);
  }
`;

export default function SpinPlanet() {
  return (
    <SpinPlanetLayout>
      <Planet>
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
      </Planet>
    </SpinPlanetLayout>
  );
}
