import React from 'react';
import {App} from 'App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<App/>);

reportWebVitals();
