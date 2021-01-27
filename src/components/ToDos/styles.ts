import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 26vh;

  max-width: 400px;
  max-height: 300px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 40px;

  background: rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    flex-direction: column;

    width: 78%;
    height: 100%;

    div {
      width: 100%;
      height: 30%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      background: rgba(255, 255, 255, 0.5);

      /* &:first-child {
        margin-top: 5px;
      } */

      margin: 10px;

      span {
        width: 35px;
        height: 35px;

        background-color: #fff;

        border-radius: 50%;

        margin-right: 10px;
      }

      p {
        width: 70%;
        height: 5%;

        display: flex;
        text-align: center;
        align-items: center;

        font-size: 20px;
        color: #000;
      }
    }
  }

  button {
    width: 30px;
    height: 30px;

    border-radius: 50%;
    border: 0;

    background: #a3ddcb;

    margin: 15px;
  }
`;
