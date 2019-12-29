import React from 'react';
import './search-field-.styles.css';

export default function SearchField({ placeHolder, handleChange}) {
    return (
        <input 
            className='search'
            type='search' 
            placeholder={placeHolder} 
            onChange={handleChange}
        />
    );
}