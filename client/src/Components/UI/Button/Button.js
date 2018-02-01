import React from 'react';
import './Button.css';

const button =(props) => (
  <button className={['Button', props.btnType].join(' ')}
          disabled={props.disabled}
          onClick={props.clicked}>{props.children}</button>
)

export default button;