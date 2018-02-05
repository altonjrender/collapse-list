import React from 'react';
import classnames from 'classnames';
import './css/dropdown.css';

export function toggleDisplay(isOpened = false) {
    return (classnames(
        {'dropdown-content-open': isOpened},
        {'dropdown-content-closed': !isOpened}
    ));
}

//TODO: try to provide it as an image

export function arrow(isOpened = false) {
    return (isOpened ?
        <div className="icon">&#709;</div> :
        <div className="icon">&#708;</div>);
}
