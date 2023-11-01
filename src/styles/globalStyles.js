import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: Light;
  src: local("Gilroy-Light"), url("/Gilroy-Light.otf") format("otf");
}

@font-face {
  font-family: Medium;
  src: local("Gilroy-Medium"), url("/Gilroy-Medium.otf") format("otf");
}

@font-face {
  font-family: Bold;
  src: local("Gilroy-Bold"), url("/Gilroy-Bold.otf") format("otf");
}

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
  background-color: #d7dedc;
  font-family: 'Medium', sans-serif;
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
