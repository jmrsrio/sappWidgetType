import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './widgets/List';


const appendWIdget = ()=>{
  console.log('window is loaded, initiating sapp widget');
  const root = ReactDOM.createRoot(document.getElementById('sapp-widget-root'));
  root.render(
      <App />
  );
}

let isWindowLoaded = false;

window.addEventListener('DOMContentLoaded',function(){
  isWindowLoaded = true;
  appendWIdget();
})

window.onload = function(){
  if(!isWindowLoaded){
    isWindowLoaded = true;
    appendWIdget();
  }
}


