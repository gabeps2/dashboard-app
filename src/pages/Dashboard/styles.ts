import styled from "styled-components";

interface ContainerProps {
  wallpaperUrl?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url(${(props) => props.wallpaperUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
