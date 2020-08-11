import React from 'react';
import './Book.css';

export default function Book(props){
    const {
        title,
        img,
        authors,
        pagesNum,
        publisher,
        yearPub,
        yearSell,
        ISBN,
    } = props;

    return(
        <div className={'book-wrap'}>
            <div className={'buttons'}>
                <div className={'delete'} />
                <div className={'edit'} />
            </div>
            {img && <img alt="img" src={img} className={'img'} />}
            <h2 className={'title'}>{title}</h2>
            <div>
                <span>{authors.length > 1 ? 'Авторы:' : 'Автор:'}</span>
            </div>
            <div>
                <span>Количество страниц:  </span>
                <span>{pagesNum}</span>
            </div>
            {publisher && (
                <div>
                    <span>Издательство:  </span>
                    <span>{`"${publisher}"`}</span>
                </div>
            )}
            {yearPub && (
                <div>
                    <span>Год публикации:  </span>
                    <span>{`${yearPub} г.`}</span>
                </div>
            )}
            {yearSell && (
                <div>
                    <span>Дата выхода в тираж:  </span>
                    <span>{`${yearSell} г.`}</span>
                </div>
            )}
            {ISBN && (
                <div>
                    <span>ISBN:  </span>
                    <span>{ISBN}</span>
                </div>
            )}
        </div>
    );
}