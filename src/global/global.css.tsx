import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1,h2,h3,h4,h5 {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    p {
        margin-block-start: 0;
        margin-block-end: 0;
    }

    ul{
        padding-inline-start: 0;
        list-style: none;
        text-align: start;
    }
`;
