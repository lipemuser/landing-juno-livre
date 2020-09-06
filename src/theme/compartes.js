import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
  }
body {
  margin: 0px;
  --primary-color: #C8C2BD;
  --primary-color-hover: #b0a59b;
  --secundary-color: #FFFFFF;
  --secundary-color-hover: #d6d6d6;

  --font-primary-color : #555555;

  --max-width: 1160px;

  @font-face {font-family: "Shree Devanagari 714"; src: url("//db.onlinewebfonts.com/t/d02befc8fdd8e5315fb21fa7f38fd55a.eot"); src: url("//db.onlinewebfonts.com/t/d02befc8fdd8e5315fb21fa7f38fd55a.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/d02befc8fdd8e5315fb21fa7f38fd55a.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/d02befc8fdd8e5315fb21fa7f38fd55a.woff") format("woff"), url("//db.onlinewebfonts.com/t/d02befc8fdd8e5315fb21fa7f38fd55a.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/d02befc8fdd8e5315fb21fa7f38fd55a.svg#Shree Devanagari 714") format("svg"); }
}

h1,
h2,
h3,
h4,
p {
  margin: 0px;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  display: block;
  font-size: 1rem;
  font-family: 'Shree Devanagari 714';
  color: #333;
}

a {
  text-decoration: none;
  color: #333;
}
`