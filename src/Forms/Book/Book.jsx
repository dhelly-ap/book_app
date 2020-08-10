import React from 'react';
import './Book.css';

export default function Book(props){
    const {
        title,
        img,
    } = props;
    return(
        <div className={'book-wrap'}>
            <img alt="img" src={img} className={'img'} />
            <h2 className={'title'}>{title}</h2>
        </div>
    );
}