import { create } from "domain";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        background: #000;
    }

`;
