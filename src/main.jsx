import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';

import { MantineProvider, createTheme } from '@mantine/core';
const myColor = [
  '#ffebff',
  '#f5d5fc',
  '#e6a9f3',
  '#d779eb',
  '#cb51e4',
  '#c437e0',
  '#c029df',
  '#a91cc6',
  '#9715b1',
  '#840a9c'
];
const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    myColor,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </Router>
  </React.StrictMode>,
)
