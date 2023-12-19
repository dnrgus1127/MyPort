import styled from "styled-components";

export interface AnimationComponentProps {
  $enableAnimation?: boolean;
  $visible?: boolean;
}

export const AnimationComponent = styled.div<AnimationComponentProps>``;
//styled(AnimationComponent.withComponent('span'))`
