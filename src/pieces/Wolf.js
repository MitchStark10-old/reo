import React from 'react';
import wolfPng from '../icons/wolf.png';
import './Piece.scss';

export default function Reaper() {
    return (
        <img className='piece' src={wolfPng}></img>
    );
}