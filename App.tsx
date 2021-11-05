import React from 'react';
import ThemeProvider from 'ui/router/Router';
import Router from "ui/router/Router";


export default function App() {
  return (
    <ThemeProvider >
        <Router/>
    </ThemeProvider>
  );
}


