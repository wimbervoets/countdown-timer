import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
// import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // <React.StrictMode>
  //     <ThemeProvider>
  //       <MaterialTailwindControllerProvider>
  //         <App />
  //       </MaterialTailwindControllerProvider>
  //     </ThemeProvider>
  // </React.StrictMode>

  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
