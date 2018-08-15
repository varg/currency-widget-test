import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
window.jQuery = window.$ = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.onload = function() {
  const box = $('.currency-widget-option');
  const boxHeight = box.outerHeight();
  const boxArrowSide = Math.sqrt((Math.pow(boxHeight, 2) / 2))
  $('.currency-widget-option-arrow', box).css({
    width: boxArrowSide,
    height: boxArrowSide
  });
}
