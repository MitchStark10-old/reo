import React from 'react';
import reaperImg from '../icons/scythe.png';
import './Piece.scss';

export default function Reaper() {
    return (
        <img className='piece' src={reaperImg}></img>
    );
}