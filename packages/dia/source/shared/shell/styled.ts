import {
    createGlobalStyle,
} from 'styled-components';



export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        overflow: hidden;
        margin: 0;
        padding: 0;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #a-story {
        height: 100%;
        overflow: auto;
    }
`;
