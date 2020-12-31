import React from 'react';

import './index.scss';

export const SearchPanel = () => {
    const searchText = 'Type here to search';
    
    return <input
    className="form-control search-input"
    placeholder={searchText} 
    />
};