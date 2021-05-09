import './App.css';
import React from 'react';
import Board from './board/Board';
import PiecePicker from './piecePicker/PiecePicker';

function App() {
    return (
        <div className="App">
            <PiecePicker />
            <Board />
        </div>
    );
}

export default App;
