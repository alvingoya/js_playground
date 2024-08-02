import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import AddColorForm from "./components/AddColorForm";
import AppColor from "./components/AppColor";
import data from "./data/recipes.json";
import colors from "./data/recipes.json";
import ColorProvider from "./components/ColorProvider";
import Checkbox from "./components/Checkbox";
import WordCountApp from "./components/WordCount";
import Debounce from "./components/Debounce";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


        <WordCountApp />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
