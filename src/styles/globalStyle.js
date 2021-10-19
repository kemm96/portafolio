import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
   *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      background-color: transparent;
      user-select: none;
   }
   html,
   body{
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      line-height: 1.6;
      font-size: 8px;
      background-color: #eeeeee;
      overflow-x: hidden; 
   }
   a{
      text-decoration: none;
      color: inherit;
   }
   li{
      list-style-type: none;
}

   /* ******************************************************************************** */
   @media (min-width: 512px) {
      html,
      body{
         font-size: 10px;
      }
   }

   /* ******************************************************************************** */
   @media (min-width: 768px) {
      html,
      body{
         font-size: 12px;
      }
   }

   /* ******************************************************************************** */
   @media (min-width: 1024px) {
      html,
      body{
         font-size: 14px;
      }
   }
`;

export default GlobalStyle;