import React from 'react';
import ReactDOM from 'react-dom';
import products from './products';


function ProductsComp(props) {
  console.log(props.id)
  return (
    <div >
      <h1 style={props.id=="1" ? {color:'red'}:{color:"green"}}>Hi {props.name} , you are {props.age} years old</h1>
    </div>
  );
}

export default ProductsComp;
