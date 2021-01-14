import React from 'react';
import mustangPng from '../icons/mustang.png';
import './Piece.scss';

export default function Mustang() {
    return (
        <img className='piece' src={mustangPng}></img>
    );
}