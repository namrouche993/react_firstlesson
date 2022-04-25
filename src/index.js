import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppClass from './AppClass';
import Pro from './Pro';
import Log from './Log';
import AppButtonlog from './AppButtonlog';
import Counting from './Counting';


import { render } from 'react-dom';

//import ProductsComp from './ProductsComp';
//import products from './products';




ReactDOM.render(
   <App colorname="yellow"/>,
  document.getElementById('root')
);


ReactDOM.render(
  <Pro/>,
 document.getElementById('root_products')
);

let cond = Math.random()
console.log(cond)

ReactDOM.render(
  <AppClass name={cond>0.5 ? "hmida":"redouane"} color="green"/>,
 document.getElementById('root_classcomponent')
);




ReactDOM.render(
  <Log/>,
 document.getElementById('root_log')
);


ReactDOM.render(
  <AppButtonlog/>,
 document.getElementById('root_button_loginout')
);


ReactDOM.render(
  <Counting/>,
 document.getElementById('root_counting')
);
