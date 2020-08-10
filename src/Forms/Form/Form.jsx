import React from 'react';
import Book from '../Book/Book';

import { data } from '../../mock';

import './Form.css';

export default class Form extends React.Component{
render() {
    return(
        <div className={'form-wrap'}>
            <h1 className={'form-title'}>My Book App</h1>
            <div className={'form-books'}>
                {data.map(item =>
                    <Book
                        key={item.id}
                        title={item.title}
                        img={item.img}
                    />
                )}
            </div>
        </div>
    );
};
}