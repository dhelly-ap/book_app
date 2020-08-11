import React from 'react';
import Book from '../Book/Book';

import { data } from '../../mock';

import './Form.css';

export default class Form extends React.Component{
render() {
    return(
        <div className={'form-wrap'}>
            <h1 className={'form-title'}>My Book App</h1>
            <div className={'sort'}>
                <span>Сортировать по:</span>
                <span className={'sort-author'}>Автор</span>
                <span className={'sort-year'}>Год публикации</span>
            </div>
            <div className={'form-books'}>
                {data.map(item =>
                    <Book
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        authors={item.authors}
                        pagesNum={item.pagesNum}
                        publisher={item.publisher}
                        yearPub={item.yearPub}
                        yearSell={item.yearSell}
                        ISBN={item.ISBN}
                    />
                )}
            </div>
            <div className={'button-add'}>
                <span>Добавить книгу</span>
            </div>
        </div>
    );
};
}