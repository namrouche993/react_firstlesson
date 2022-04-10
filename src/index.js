import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductsComp from './ProductsComp';
import products from './products';


function Pro() {
  const Products_Comp= products.map((item)=>{
    return <ProductsComp key={item.id} id={item.id} name={item.name} age={item.age}/>
  })

  return (
    <div>
    {Products_Comp}
    </div>
  )
}

ReactDOM.render(
   <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Pro/>,
 document.getElementById('root_products')
);