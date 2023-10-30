import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

.link {
  text-decoration: none;
  color: #333;
}

.mobile-none {
  @media screen and (max-width: 1200px) {
    display: none;
  }
}
`;

export default GlobalStyles;
