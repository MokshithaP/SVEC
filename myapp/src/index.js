import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import ClassComponent from './components/ClassComponent';
import UnionBank from './components/UnionBank';
import StateinClassComponent from './components/StateinClassComponent';
import StateInFunctionalComponent from './components/StateInFunctionalComponent';
import ListRendering from './components/ListRendering';
import FormRendering from './components/FormRendering';
import Home from './components/Home';
import FormRenderingFunctions from './components/FormRenderingFunctions';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Functional/> */}
    {/* <ClassComponent/> */}
    {/* <UnionBank/> */}
    {/* <StateinClassComponent/> */}
    {/* <StateInFunctionalComponent/> */}
    {/* <ListRendering/> */}
    {/* <FormRendering/> */}
    {/* <Home/> */}
    <FormRenderingFunctions/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
