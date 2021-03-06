import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.footer {
    border-top: 1px solid rgb(51, 51, 51);
    margin-top: 5rem;
    margin-bottom: 2rem;
    margin-top: auto 0;
    max-width: 880px;       
}

a {
    text-decoration: none;
    color: black;
    
}



* {
    box-sizing: border-box;
    
}


body {
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 800px) {
        padding: 20px;
    }
}
`;
