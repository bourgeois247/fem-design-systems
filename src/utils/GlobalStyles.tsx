import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyles = createGlobalStyle`
    ${normalize()};

    html {
        box-sizing: border-box;
    }

    *, *:before {
        box-sizing: inherit;
    }
`;