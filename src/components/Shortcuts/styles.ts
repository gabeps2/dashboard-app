import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 10vh;

  max-width: 400px;
  max-height: 100px;

  display: flex;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);

  margin-top: 80px;

  div {
    width: 85%;
    height: 60%;

    display: flex;
    align-items: center;

    &:first-child {
      margin-left: 5px;
    }

    div {
      width: 60px;
      height: 60px;

      border-radius: 50%;

      background: #a3ddcb;
    }
    > div {
      margin: 2px 2px 2px 2px;
    }
  }

  button {
    width: 30px;
    height: 30px;

    background: #a3ddcb;

    border-radius: 50%;

    margin: 5px;
    border: 0;
  }
`;
