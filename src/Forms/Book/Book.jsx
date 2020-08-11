import React from 'react';
import './Book.css';

export default function Book(props){
    const {
        id,
        title,
        img,
        authors,
        pagesNum,
        publisher,
        yearPub,
        yearSell,
        ISBN,
        handleOpen,
        handleDelete,
    } = props;

    return(
        <div className={'book-wrap'}>
            <div className={'imgButton'}>
                {img && <img alt="img" src={img} className={'img'} />}
                <div className={'buttons'}>
                    <div className={'delete'} onClick={() => handleDelete(id)} />
                    <div className={'edit'} onClick={() => handleOpen(id)} />
                </div>
            </div>
            <h2 className={'title'}>{title}</h2>
            <div>
                <span className={'subTitle'}>{authors.length > 1 ? 'Авторы:' : 'Автор:'}</span>
                {authors.map((item, key) => (
                    <ul key={key} className={'authors'}>
                        <li className={'authors-li'}>
                            <span>{item.authorName}</span>
                            <span>{item.authorSurname}</span>
                        </li>
                    </ul>
                ))}
            </div>
            <div>
                <span className={'subTitle'}>Количество страниц:  </span>
                <span>{pagesNum}</span>
            </div>
            {publisher && (
                <div>
                    <span className={'subTitle'}>Издательство:  </span>
                    <span>{`"${publisher}"`}</span>
                </div>
            )}
            {yearPub && (
                <div>
                    <span className={'subTitle'}>Год публикации:  </span>
                    <span>{`${yearPub} г.`}</span>
                </div>
            )}
            {yearSell && (
                <div>
                    <span className={'subTitle'}>Дата выхода в тираж:  </span>
                    <span>{`${yearSell} г.`}</span>
                </div>
            )}
            {ISBN && (
                <div >
                    <span className={'subTitle'}>ISBN:  </span>
                    <span>{ISBN}</span>
                </div>
            )}
        </div>
    );
}