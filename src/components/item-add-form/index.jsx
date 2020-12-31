import React from 'react';


import './index.scss';

export const ItemAddForm = ({ addItem }) => {
    return (
        <div className="item-add-form">
            <button
                className="btn btn-outline-secondary"
                onClick={addItem}
            >Add Element</button>
        </div>
    )
}