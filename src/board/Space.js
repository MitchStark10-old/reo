import React from 'react';
import SpaceTypeEnum from './SpaceTypeEnum';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function getSpaceType() {
    const spaceTypeValue = getRandomInt(100);
    let spaceType = SpaceTypeEnum.GRASS;

    if (spaceTypeValue >= 50 && spaceTypeValue < 65) {
        spaceType = SpaceTypeEnum.MOUNTAIN;
    } else if (spaceTypeValue >= 65 && spaceTypeValue < 80) {
        spaceType = SpaceTypeEnum.FOREST;
    } else if (spaceTypeValue >= 80 && spaceTypeValue < 90) {
        spaceType = SpaceTypeEnum.DESERT;
    } else if (spaceTypeValue >= 90) {
        spaceType = SpaceTypeEnum.WATER;
    }

    return spaceType;
}

export default function Space() {
    const [spaceType] = React.useState(getSpaceType());

    return (
        <span className={'space ' + spaceType.class}>
            <h1>Test</h1>
        </span>
    );
}
