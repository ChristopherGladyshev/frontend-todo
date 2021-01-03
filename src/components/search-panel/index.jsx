import React from 'react';

import './index.scss';

export const SearchPanel = ({change}) => {
    const searchText = 'Type here to search';
    
    return <input
    className="form-control search-input"
    onChange={change}
    placeholder={searchText} 
    />
};