import React from 'react';
import Component from './Component.jsx';

window.onload = () => {
  React.render(
    <Component />,
    document.querySelector('#container')
  );
};
