import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 8vh;

  max-width: 400px;
  max-height: 100px;

  display: flex;

  margin: 20px;

  Input {
    width: 85%;
    height: 50px;

    background: rgba(0, 0, 0, 0.3);

    font-size: 20px;
    color: #fff;

    border-radius: 30px 0 0 30px;
    border: 0;
  }

  button {
    width: 15%;
    height: 50px;

    background: rgba(0, 0, 0, 0.4);

    border-radius: 0 30px 30px 0;
    border: 0;
  }
`;
