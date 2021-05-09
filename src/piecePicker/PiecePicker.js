import React from 'react';
import Reaper from '../pieces/Reaper';
import Jackal from '../pieces/Jackal';
import Wolf from '../pieces/Wolf';
import Goblin from '../pieces/Goblin';
import Mustang from '../pieces/Mustang';
import './PiecePicker.scss';

export default function PiecePicker() {
    return (
        <div className="piece-picker-container">
            <Reaper />
            <Jackal />
            <Wolf />
            <Goblin />
            <Mustang />
        </div>
    );
}