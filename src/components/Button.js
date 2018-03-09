import React from 'react';

export default function Button(props) {
  return (
    <button className='adopt-button' onClick={() => props.onAdoptPet()}>{props.buttonText}</button>
  )
}