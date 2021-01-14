import React from 'react';
import goblinPng from '../icons/goblin.png';
import './Piece.scss';

export default function Reaper() {
    return (
        <img className='piece' src={goblinPng}></img>
    );
}