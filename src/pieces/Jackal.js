import React from 'react';
import jackalPng from '../icons/jackal.png';
import './Piece.scss';

export default function Jackal() {
    return (
        <img className='piece' src={jackalPng}></img>
    );
}