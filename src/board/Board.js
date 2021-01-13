import React from 'react';
import Space from './Space';
import './Board.scss';

export default function Board() {
    const [spaces] = React.useState([]);

    for (let x = 0; x < 8; x++) {
        spaces[x] = [];
        for (let y = 0; y < 8; y++) {
            spaces[x][y] = <Space key={x + ' ' + y} />;
        }
    }
    return (
        <div id='board'>
            {spaces.map((row, index) => {
                return (
                    <div key={index} className='row'>
                        {row.map((space) => space)}
                    </div>
                );
            })}
        </div >
    );
}
